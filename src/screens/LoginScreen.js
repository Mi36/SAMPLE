import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import KeyboardAvoidingViewWrapper from '../components/KBAvoidinView.js';
import {setUser} from '../ducks/auth';
import styles from '../styles/loginScreen';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const onLogin = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && !emailRegex.test(email.toLowerCase())) {
      setEmailError('Enter a valid email');
    }
    if (email?.length === 0) {
      setEmailError('Email cannot be empty');
    }
    if (password?.length === 0) {
      setPasswordError('Password cannot be empty');
    }
    if (password?.length < 6) {
      setPasswordError('Password must be 6 or more characters');
    }
    if (!emailError && !passwordError) {
      //store to redux ang logged inside
      if (email === 'test@test.com' && password === '123456') {
        dispatch(setUser(email, password));
        navigation.navigate('MAIN_STACK');
      } else {
        setEmailError('User not registered');
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingViewWrapper>
        <Text>LoginScreen</Text>
        <Input
          placeholder={'Email'}
          value={email}
          onChange={text => {
            setEmailError(null);
            setEmail(text);
          }}
        />
        {emailError && <Text>{emailError}</Text>}
        <Input
          placeholder={'Password'}
          value={password}
          onChange={text => {
            setPasswordError(null);
            setPassword(text);
          }}
        />
        {passwordError && <Text>{passwordError}</Text>}
        <Button onPress={onLogin} label={'LOGIN'} />
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default LoginScreen;
