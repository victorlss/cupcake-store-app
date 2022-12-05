import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './Navigator';
import {StateProvider} from './state/StateProvider';
import {initialState} from './state/initialState';
import {reducer} from './state/reducer';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
