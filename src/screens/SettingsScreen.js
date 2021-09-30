import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import {clearUser} from '../ducks/auth';
import styles from '../styles/settingsScreen';

const SettingsScreen = ({navigation}) => {
  const currentUser = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.user}>Logged in as</Text>
      <Text style={styles.email}> {currentUser?.email}</Text>
      <Button
        label="LOGOUT"
        onPress={() => {
          dispatch(clearUser());
          navigation.navigate('LOGIN');
        }}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
