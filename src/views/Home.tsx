import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import Product from '../components/Product';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';

const Hone = () => {
  const navigation = useNavigation();

  useEffect(() => {
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
      ),
    });
  });

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
  icon_button: {
    marginRight: 2,
  },
});

export default Hone;
