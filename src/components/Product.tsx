import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Badge from './Badge';

const Product = () => (
  <View style={styles.container}>
    <Badge>1</Badge>
    <Image source={require('../../assets/logo.png')} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.productTitle}>Cupcake de Maracujá muito bom</Text>
      <Text>R$14,90</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: '60%',
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  productTitle: {
    fontWeight: 'bold',
  },
});

export default Product;
