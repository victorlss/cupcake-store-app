import axios from 'axios';
import {API_URL} from '../constants';

export const login = (username: string, password: string) => {
  return axios.post(
    `${API_URL}/auth/signin`,
    {username, password},
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
};
