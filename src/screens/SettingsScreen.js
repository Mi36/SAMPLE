import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import {clearUser} from '../ducks/auth';

const SettingsScreen = ({navigation}) => {
  const currentUser = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log(currentUser);
  return (
    <View>
      <Button
        label="LOGOUT"
        onPress={() => {
          dispatch(clearUser());
          navigation.navigate('LOGIN');
        }}
      />
    </View>
  );
};

export default SettingsScreen;
