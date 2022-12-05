import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import Product from '../components/Product';

const Hone = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scroll_view}>
          <Card style={styles.card}>
            <ScrollView horizontal={true}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </ScrollView>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: '2%',
  },
  scroll_view: {
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  card: {
    height: 250,
    width: '90%',
    backgroundColor: '#fff',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    margin: '2%',
    padding: 0,
  },
});

export default Hone;
