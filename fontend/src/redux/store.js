import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootreducer from './rootreducer';

const middleweres = [logger];

export const store =createStore(rootreducer,applyMiddleware(...middleweres));