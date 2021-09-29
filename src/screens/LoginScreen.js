import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../components/Input';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Input placeholder={'Email'} />
      <Input placeholder={'Password'} />
    </SafeAreaView>
  );
};

export default LoginScreen;
