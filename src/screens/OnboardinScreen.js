import React, {useEffect} from 'react';
import {BackHandler, SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';
import styles from '../styles/onboardingScreen';

const OnboardinScreen = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const onNavigation = () => navigation.navigate('LOGIN');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.welcome}>Easy Shopping</Text>
      <Button label={'Get started'} onPress={onNavigation} />
    </SafeAreaView>
  );
};

export default OnboardinScreen;
