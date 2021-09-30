import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import KeyboardAvoidingViewWrapper from '../components/KBAvoidinView.js';
import styles from '../styles/loginScreen';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingViewWrapper>
        <Text>LoginScreen</Text>
        <Input placeholder={'Email'} />
        <Input placeholder={'Password'} />
        <Button onPress={() => navigation.navigate('MAIN_STACK')} />
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default LoginScreen;
