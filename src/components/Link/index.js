import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const Link = ({onPress, prefix, suffix}) => {
  return (
    <View style={styles.signin}>
      <Text>{prefix}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signInlabel}> {suffix}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;

Link.propTypes = {
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  onPress: PropTypes.func,
};

Link.defaultProps = {
  prefix: '---',
  suffix: '---',
  onPress: null,
};

const styles = StyleSheet.create({
  signin: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signInlabel: {
    color: 'red',
  },
});
