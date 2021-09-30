import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});

export default Loader;
