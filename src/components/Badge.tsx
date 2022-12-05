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
    width: 25,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    borderRadius: 15,
    padding: 4,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default Badge;
