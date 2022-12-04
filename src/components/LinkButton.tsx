import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProp extends TouchableOpacityProps {
  title: string;
}

const LinkButton = (props: ButtonProp) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: '#e57c00',
    alignSelf: 'center',
  },
});

export default LinkButton;
