import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import EntryScreen from '../screens/EntryScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardinScreen from '../screens/OnboardinScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') {
            iconName = require('../../assets/home.png');
          } else if (route.name === 'Settings') {
            iconName = require('../../assets/settings.png');
          }
          return <Image source={iconName} style={styles.image} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          screenOrientation: 'portrait',
        }}>
        <Stack.Screen name="ENTRY" component={EntryScreen} />
        <Stack.Screen name="ONBOARDING" component={OnboardinScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="MAIN_STACK" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});

export default Router;
