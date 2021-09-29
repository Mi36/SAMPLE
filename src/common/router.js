import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import OnboardinScreen from '../screens/OnboardinScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          screenOrientation: 'portrait',
        }}>
        <Stack.Screen name="ONBOARDING" component={OnboardinScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
