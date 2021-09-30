import React, {useEffect} from 'react';
import {BackHandler, SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../components/Header';
import Product from '../components/Product';
import styles from '../styles/homeScreen';

const HomeScreen = ({navigation}) => {
  const items = useSelector(state => state.product.items);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <Header header="Products" />
        {items.map((item, index) => {
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
