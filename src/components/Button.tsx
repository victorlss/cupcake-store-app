import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProp extends TouchableOpacityProps {
  title: string;
  loading: boolean;
}

const Button = (props: ButtonProp) => {
  return (
    <TouchableOpacity
      {...props}
      style={styles.buttonContainer}
      disabled={props.loading}>
      <Text style={styles.buttonText}>{props.title}</Text>
      {props.loading && (
        <ActivityIndicator style={styles.activityIndicator} color="#fff" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#e57c00',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Button;
