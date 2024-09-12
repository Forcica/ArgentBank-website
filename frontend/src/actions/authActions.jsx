import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.body.token });
    // Stockez le token dans le localStorage
    localStorage.setItem('token', response.data.body.token);
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};