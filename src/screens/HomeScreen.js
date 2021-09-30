import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {products} from '../../data/dummy-data';
import Product from '../components/Product';
import styles from '../styles/homeScreen';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <Text style={styles.header}>Products</Text>
        {products.map((item, index) => {
          const {id, description, image, price, name} = item;
          return (
            <Product
              key={id}
              description={description}
              image={image}
              price={price}
              name={name}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
