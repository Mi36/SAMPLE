import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder, value, onBlur, onChange}) => {
  return (
    <TextInput
      onBlur={onBlur}
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
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: 'Enter',
  value: '',
  onBlur: null,
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
