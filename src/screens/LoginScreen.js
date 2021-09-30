import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {users} from '../../data/dummy-data';
import {REGEX} from '../common/constants';
import Button from '../components/Button';
import Input from '../components/Input';
import KeyboardAvoidingViewWrapper from '../components/KBAvoidinView.js';
import {setUser} from '../ducks/auth';
import styles from '../styles/loginScreen';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

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
            onPress: () => {
              formReset();
            },
          },
        ],
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.header}>Sign In</Text>
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
                message: 'This field is required',
              },
            }}
            defaultValue=""
          />
          {errors.email && <Text>{errors.email.message}</Text>}
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
                message: 'This field is required',
              },
            }}
            defaultValue=""
          />
          {errors.password && <Text>{errors.password.message}</Text>}
          <Button onPress={handleSubmit(onSubmit)} label={'Sign In'} />
        </View>
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default LoginScreen;
