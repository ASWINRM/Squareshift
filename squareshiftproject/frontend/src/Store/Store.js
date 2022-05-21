import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productreducer} from '../reducers/productreducer'
import thunk from 'redux-thunk'


const reducers = combineReducers({
   productreducer:productreducer
})

const middleware = [thunk]

const initialstate = {};
const store = createStore(reducers, initialstate,composeWithDevTools(applyMiddleware(...middleware)));
export default store