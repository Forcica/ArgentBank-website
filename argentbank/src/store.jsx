import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducers.jsx'; // Assurez-vous que ce chemin est correct

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;