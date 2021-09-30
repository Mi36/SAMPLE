import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.main, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

Button.defaultProps = {
  label: 'PRESS HERE',
  onPress: null,
  style: null,
};

const styles = StyleSheet.create({
  main: {
    height: 60,
    backgroundColor: '#F55352',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
  },
});
