import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';
import styles from '../styles/onboardingScreen';

const OnboardinScreen = ({navigation}) => {
  const onNavigation = () => navigation.navigate('LOGIN');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.welcome}>Easy Shopping</Text>
      <Button label={'Get started'} onPress={onNavigation} />
    </SafeAreaView>
  );
};

export default OnboardinScreen;
