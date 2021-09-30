import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Header = ({header}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
    </View>
  );
};

export default Header;

Header.propTypes = {
  header: PropTypes.string,
};

Header.defaultProps = {
  header: '----',
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
  },
  container: {
    paddingVertical: 15,
  },
});
