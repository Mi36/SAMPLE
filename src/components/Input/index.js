import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({onChange, value, placeholder}) => {
  return (
    <TextInput
      autoCapitalize="none"
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: 'Enter',
  value: null,
  onChange: null,
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 15,
    borderRadius: 10,
  },
});
