import React, {useContext} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import {StateContext} from '../state/StateContext';
import {CartItem} from '../interfaces/CartItem';
import Title from '../components/Title';
import {brazilianCurrencyFormat} from '../utils/number';
import Heading1 from '../components/Heading1';
import Heading2 from '../components/Heading2';
import Icon from 'react-native-vector-icons/AntDesign';

const ShoppingCart = () => {
  // @ts-ignore
  const [{cartItems}, dispatch] = useContext(StateContext);

  const addItem = (cartItem: CartItem) => {
    cartItem.quantity++;
    dispatch({
      type: 'setCartItems',
      payload: cartItems,
    });
  };

  const removeItem = (cartItem: CartItem, index: number) => {
    if (cartItem.quantity > 0) {
      cartItem.quantity--;
    }

    if (cartItem.quantity === 0) {
      cartItems.splice(index, 1);
    }

    dispatch({
      type: 'setCartItems',
      payload: cartItems,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Title>Carrinho</Title>

        {cartItems.filter((item: CartItem) => item.quantity > 0).length ===
          0 && <Heading2>Seu carrinho está vazio.</Heading2>}

        {cartItems
          .filter((item: CartItem) => item.quantity > 0)
          .map((item: CartItem, index: number) => (
            <Card key={index} style={styles.card}>
              <View>
                <Image source={item.product.image} style={styles.image} />
              </View>
              <View style={styles.text_container}>
                <Heading1>{item.product.title}</Heading1>
                <Heading2>Quantidade: {item.quantity}</Heading2>
                <Heading2>
                  Total:{' '}
                  {brazilianCurrencyFormat(item.product.price * item.quantity)}
                </Heading2>
              </View>
              <View style={styles.button_container}>
                <Icon.Button
                  name="plussquareo"
                  color="#000"
                  backgroundColor="#fff"
                  size={25}
                  onPress={() => addItem(item)}
                />
                <Icon.Button
                  name="minussquareo"
                  color="#000"
                  backgroundColor="#fff"
                  size={25}
                  onPress={() => removeItem(item, index)}
                />
              </View>
            </Card>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '2%',
    marginTop: '4%',
  },
  card: {
    marginBottom: 4,
    padding: 15,
    flexDirection: 'row',
    height: 115,
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 6,
  },
  text_container: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  button_container: {
    justifyContent: 'space-between',
    position: 'absolute',
    right: 0,
    marginTop: 14,
  },
});

export default ShoppingCart;
