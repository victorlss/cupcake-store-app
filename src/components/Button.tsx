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

const Button = (props: ButtonProp) => {
  return (
    <TouchableOpacity {...props} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#e57c00',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Button;
