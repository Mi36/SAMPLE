import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';

const OnboardinScreen = ({navigation}) => {
  const onNavigation = () => navigation.navigate('LOGIN');
  return (
    <SafeAreaView>
      <Text>Starting Screen</Text>
      <Button label={'Sign In'} onPress={onNavigation} />
    </SafeAreaView>
  );
};

export default OnboardinScreen;
