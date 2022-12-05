import React, {useContext, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Card from '../components/Card';
import Product from '../components/Product';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {products} from '../__mocks__/products';
import Badge from '../components/Badge';
import {StateContext} from '../state/StateContext';
import {CartItem} from '../interfaces/CartItem';
import Title from '../components/Title';

interface HomeProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Home = (props: HomeProps) => {
  const {navigation} = props;
  // @ts-ignore
  const [{cartItems}] = useContext(StateContext);

  useEffect(() => {
    const cartItemsQuantity = cartItems.reduce(
      (acc: number, current: CartItem) => {
        acc += current.quantity;
        return acc;
      },
      0,
    );

    navigation.setOptions({
      headerLeft: () => (
        <IconIon.Button
          name="exit-outline"
          iconStyle={styles.icon_button}
          color="#000"
          backgroundColor="#fff"
          size={25}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      ),
      headerRight: () => (
        <>
          <Icon.Button
            name="shoppingcart"
            iconStyle={styles.icon_button}
            color="#000"
            backgroundColor="#fff"
            size={25}
            onPress={() => {
              navigation.navigate('ShoppingCart');
            }}
          />
          {cartItemsQuantity > 0 && <Badge>{cartItemsQuantity}</Badge>}
        </>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <Title>Ofertas</Title>
      <Card style={styles.card}>
        <ScrollView horizontal={true}>
          {products
            .filter(p => p.sale)
            .map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </ScrollView>
      </Card>

      <Title>Nossas variedades</Title>
      <Card style={styles.card}>
        <ScrollView horizontal={true}>
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </ScrollView>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    margin: '2%',
    marginTop: '4%',
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  card: {
    marginBottom: 24,
    height: 250,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    padding: 0,
  },
  icon_button: {
    marginRight: 2,
  },
});

export default Home;
