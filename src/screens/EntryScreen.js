import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';

const EntryScreen = ({navigation}) => {
  const currentUser = useSelector(state => state.auth);

  useEffect(() => {
    navigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = () => {
    if (currentUser?.email) {
      navigation.navigate('MAIN_STACK');
    } else {
      navigation.navigate('ONBOARDING');
    }
  };
  return <Loader />;
};

export default EntryScreen;
