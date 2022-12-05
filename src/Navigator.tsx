import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './views/Login';
import Home from './views/Home';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
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
          title: 'Inicio',
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
