import React from 'react';
import {View, StyleSheet, Text, TextInputProps} from 'react-native';

const Badge = (props: TextInputProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 20,
    position: 'absolute',
    right: -5,
    top: -1,
    alignItems: 'center',
    borderRadius: 50,
    padding: 1,
    zIndex: 1,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default Badge;
