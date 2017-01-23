import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import createThunk from 'redux-thunk'


export default function configureStore(initialState: any = undefined){
  const logger = createLogger();
  const enhancer = compose(
    applyMiddleware(createThunk, createLogger)
  );

  return createStore(rootReducer, initialState, enhancer);
}
