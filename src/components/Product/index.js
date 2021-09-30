import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../Button';
import PropTypes from 'prop-types';

const Product = ({description, price, name, image}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image style={styles.imageStyle} source={image} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <Button onPress={() => {}} label={'Buy'} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    borderColor: '#F55352',
  },
  button: {
    height: 35,
    marginHorizontal: 25,
    backgroundColor: '#F55352',
  },
  name: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  description: {
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  price: {
    textAlign: 'center',
    fontSize: 25,
  },
});

Product.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Product.defaultProps = {
  placeholder: 'Enter',
  value: null,
  onChange: null,
};

export default Product;
