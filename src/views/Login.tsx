import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_image}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <LinkButton
          title="Esqueceu sua senha?"
          style={styles.forgotPasswordButton}
        />
        <Button title="Entrar" onPress={() => doLogin()} />
      </View>

      <View style={styles.createAccountButton}>
        <Text style={styles.text}>Ainda não tem uma conta?</Text>
        <LinkButton title="Crie uma agora" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  container_image: {
    height: '40%',
    width: '100%',
    backgroundColor: '#f9ebe2',
    alignItems: 'center',
    paddingTop: '20%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    width: '80%',
    height: '120%',
  },
  form: {
    marginTop: '20%',
    width: '75%',
  },
  forgotPasswordButton: {
    marginTop: -10,
    marginBottom: 20,
  },
  createAccountButton: {
    position: 'absolute',
    bottom: 60,
  },
  text: {
    fontSize: 18,
  },
});

export default Login;
