import React from 'react';
import {StyleSheet, View} from 'react-native';

const Loader = () => {
  return <View style={styles.main} />;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default Loader;
