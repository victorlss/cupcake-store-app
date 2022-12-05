import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

interface CardProps extends ViewProps {
  style: any;
}

const Card = (props: CardProps) => (
  <View style={{...styles.card, ...props.style}}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.02,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
export default Card;
