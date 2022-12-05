import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import {Text} from 'react-native';

const Title = (props: TextProps) => (
  <Text style={styles.text}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    margin: 2,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Title;
