import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './views/Login';
import Home from './views/Home';
import ShoppingCart from './views/ShoppingCart';
import LogoTitle from './components/LogoTitle';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  // TODO: Implement auth
  const isSessionActive = false;

  return (
    <Stack.Navigator initialRouteName={isSessionActive ? 'Home' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
