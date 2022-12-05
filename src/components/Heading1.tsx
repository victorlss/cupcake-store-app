import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import {Text} from 'react-native';

const Heading1 = (props: TextProps) => (
  <Text style={styles.text}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    margin: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Heading1;
