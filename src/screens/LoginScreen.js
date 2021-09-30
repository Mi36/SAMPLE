import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {REGEX} from '../common/constants';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import KeyboardAvoidingViewWrapper from '../components/KBAvoidinView.js';
import {setUser} from '../ducks/auth';
import styles from '../styles/loginScreen';

const LoginScreen = ({navigation}) => {
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
    const {email, password} = data;
    const emailExist = users?.find(user => {
      return user.email === email;
    });
    const matchingUser = users?.find(user => {
      return user.email === email && user.password === password;
    });
    if (matchingUser) {
      dispatch(setUser(email, password));
      formReset();
      navigation.navigate('MAIN_STACK');
    } else {
      Alert.alert(
        'Error',
        emailExist ? 'Incorrect password' : 'User not registered',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header header="Sign In" />
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
          <Button onPress={handleSubmit(onSubmit)} label={'Sign In'} />

          <View style={styles.signin}>
            <Text>Not registered yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SIGNUP')}>
              <Text style={styles.signInlabel}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default LoginScreen;
