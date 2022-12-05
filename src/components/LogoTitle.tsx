import React from 'react';
import {StyleSheet, Image} from 'react-native';

const LogoTitle = () => (
  <Image style={styles.image} source={require('../../assets/logo_text.png')} />
);

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 40,
    marginTop: -10,
  },
});
export default LogoTitle;
