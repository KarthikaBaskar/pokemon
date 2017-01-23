import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'


export default function configureStore(initialState: any = undefined){
  const logger = createLogger();
  const enhancer = compose(
    applyMiddleware(thunk, promise, logger)
  );

  return createStore(rootReducer, initialState, enhancer);
}
