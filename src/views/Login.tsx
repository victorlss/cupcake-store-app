import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StateContext} from '../state/StateContext';

interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Login = (props: LoginProps) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // @ts-ignore
  const [{auth}] = useContext(StateContext);

  useEffect(() => {
    if (auth && auth.refreshToken) {
      navigation.navigate('Home');
    }
  });

  const doLogin = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Home');
      setLoading(false);
    }, 600);

    console.log('Bypass Auth');

    // TODO: Enable Auth
    // setLoading(true);
    // login(email, password)
    //   .then(axiosResponse => {
    //     dispatch({
    //       type: 'setAuth',
    //       payload: {
    //         accessToken: axiosResponse.data.accessToken,
    //         refreshToken: axiosResponse.data.refreshToken,
    //       },
    //     });
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
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
        <Button title="Entrar" loading={loading} onPress={() => doLogin()} />
      </View>

      <View style={styles.createAccountButton}>
        <Text style={styles.textContainer}>Ainda não tem uma conta?</Text>
        <LinkButton title="Crie uma agora" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
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
    width: '75%',
  },
  forgotPasswordButton: {
    marginTop: -10,
    marginBottom: 20,
  },
  createAccountButton: {
    marginBottom: '10%',
  },
  textContainer: {
    fontSize: 18,
  },
});

export default Login;
