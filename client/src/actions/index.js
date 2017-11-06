import axios from 'axios';
import { FETCH_USER } from './types';

// if a function is being returned, react-thunk will pass in 'dispatch' to function
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data });
    // axios returns a promise
  };

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token)
  dispatch({ type: FETCH_USER, payload: res.data });
};
