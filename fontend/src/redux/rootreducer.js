import { combineReducers } from 'redux';
import storeReducer from './store/storeReducer'

const rootreducer = combineReducers({
    store: storeReducer
})

export default rootreducer;