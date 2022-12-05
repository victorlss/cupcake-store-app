import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './views/Login';
import Home from './views/Home';
import Icon from 'react-native-vector-icons/AntDesign';

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
          headerRight: () => (
            <Icon.Button
              name="shoppingcart"
              iconStyle={{marginRight: 2}}
              color="#000"
              backgroundColor="#fff"
              size={25}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
