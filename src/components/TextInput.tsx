import React from 'react';
import {
  StyleSheet,
  TextInput as ReactTextInput,
  TextInputProps,
  View,
} from 'react-native';

const TextInput = (props: TextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <ReactTextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#c0b7b7',
    borderWidth: 2,
    borderRadius: 30,
    height: 50,
    marginBottom: 15,
    // paddingTop: 10,
  },
  input: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default TextInput;
