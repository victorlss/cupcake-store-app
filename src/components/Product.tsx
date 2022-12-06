import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Badge from './Badge';
import ProductInterface from '../interfaces/Product';
import {brazilianCurrencyFormat} from '../utils/number';
import {CartItem} from '../interfaces/CartItem';
import Icon from 'react-native-vector-icons/AntDesign';
import {StateContext} from '../state/StateContext';

interface ProductProps {
  product: ProductInterface;
}

const Product = (props: ProductProps) => {
  const {product} = props;
  // @ts-ignore
  const [{cartItems}, dispatch] = useContext(StateContext);

  let cartItem: CartItem = cartItems.find((item: CartItem) => {
    return item.product.id === product.id;
  });

  // TODO: Refactoring
  const addItemCart = () => {
    if (!cartItem) {
      cartItem = {
        product,
        quantity: 0,
      };

      cartItems.push(cartItem);
    }

    cartItems.forEach((item: CartItem) => {
      if (item.product.id === cartItem.product.id) {
        item.quantity++;
      }
    });

    dispatch({
      type: 'setCartItems',
      payload: cartItems,
    });
  };

  // TODO: Refactoring
  const removeItemCart = () => {
    if (cartItem.quantity === 0) {
      return;
    }

    cartItems.forEach((item: CartItem) => {
      if (item.product.id === cartItem.product.id) {
        cartItem.quantity--;
      }
    });

    dispatch({
      type: 'setCartItems',
      payload: cartItems,
    });
  };

  return (
    <View style={styles.container}>
      {cartItem && cartItem.quantity > 0 && <Badge>{cartItem.quantity}</Badge>}
      <Image source={product.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>
          {brazilianCurrencyFormat(product.price)}
        </Text>
      </View>
      <View style={styles.rowButtons}>
        <View style={styles.view_button}>
          <Icon.Button
            name="minussquareo"
            iconStyle={styles.button}
            color="#000"
            backgroundColor="#fff"
            size={25}
            onPress={removeItemCart}
          />
        </View>

        <View style={styles.view_button}>
          <Icon.Button
            name="plussquareo"
            iconStyle={styles.button}
            color="#000"
            backgroundColor="#fff"
            size={25}
            onPress={addItemCart}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: '60%',
    margin: 10,
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  productTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    textAlign: 'center',
  },
  rowButtons: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  view_button: {
    width: 40,
  },
  button: {
    width: '100%',
  },
});

export default Product;
