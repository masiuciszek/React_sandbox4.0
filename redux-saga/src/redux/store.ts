import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './appReducer';
import { handleDecrement, handleIncrement } from './app.saga';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const rootReducer = combineReducers({
  app: appReducer,
});


const middleWareEnhancer = applyMiddleware(...middlewares);


export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));


sagaMiddleware.run(handleIncrement);
sagaMiddleware.run(handleDecrement);
