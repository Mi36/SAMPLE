import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Input placeholder={'Email'} />
      <Input placeholder={'Password'} />
      <Button onPress={() => navigation.navigate('MAIN_STACK')} />
    </SafeAreaView>
  );
};

export default LoginScreen;
