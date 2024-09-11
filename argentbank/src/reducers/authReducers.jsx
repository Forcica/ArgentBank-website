import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authActions';

const initialState = {
   token: (() => {
     try {
       return localStorage.getItem('token') || null;
     } catch (error) {
       console.error('Error accessing localStorage:', error);
       return null;
     }
   })(),
   isAuthenticated: false,
   isLoading: false,
   error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuthenticated: true, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;