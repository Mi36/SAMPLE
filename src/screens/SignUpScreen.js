import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {REGEX} from '../common/constants';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import KeyboardAvoidingViewWrapper from '../components/KBAvoidinView.js';
import Link from '../components/Link';
import {userRegister} from '../ducks/auth';
import styles from '../styles/loginScreen';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.auth.users);

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const formReset = () => {
    reset({
      email: '',
      password: '',
    });
  };

  const onSubmit = data => {
    const {email} = data;
    const emailExist = users?.find(user => {
      return user.email === email;
    });

    if (emailExist) {
      Alert.alert('Error', 'User with this email already exist', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => formReset(),
        },
      ]);
    } else {
      //add user to redux and navigate to login
      dispatch(userRegister(data));
      formReset();
      Alert.alert('Success', 'Account created successfully', [
        {
          text: 'OK',
          onPress: () => {
            formReset();
            navigation.navigate('LOGIN');
          },
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header header={'Sign Up'} />
      <KeyboardAvoidingViewWrapper>
        <View style={styles.subContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder={'Email'}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
            rules={{
              pattern: {
                value: REGEX.email,
                message: 'Invalid email',
              },
              required: {
                value: true,
                message: 'Email cannot be empty',
              },
            }}
            defaultValue=""
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder={'Password'}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="password"
            rules={{
              required: {
                value: true,
                message: 'Password cannot be empty',
              },
            }}
            defaultValue=""
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          <Button onPress={handleSubmit(onSubmit)} label={'Sign Up'} />
          <Link
            prefix="Registered?"
            suffix="Sign In"
            onPress={() => navigation.navigate('LOGIN')}
          />
        </View>
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default SignUpScreen;
