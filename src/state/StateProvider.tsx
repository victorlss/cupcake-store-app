import React, {useReducer} from 'react';
import {StateProviderProps} from '../interfaces/StateProviderProps';
import {StateContext} from './StateContext';

export const StateProvider = (props: StateProviderProps) => {
  const {reducer, initialState, children} = props;

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
