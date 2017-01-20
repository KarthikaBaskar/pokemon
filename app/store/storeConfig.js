import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import createThunk from 'redux-thunk'


export default function configureStore(initialState){
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware( createThunk, createLogger )
  );

  return store;
}
