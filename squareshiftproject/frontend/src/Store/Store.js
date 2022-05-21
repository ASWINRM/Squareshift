import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productreducer } from '../reducers/productreducer'
import { userloginreducer } from '../reducers/userreducer'
import { cartreducer } from '../reducers/Cartreducer'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    productreducer: productreducer,
    userloginreducer: userloginreducer,
    cartreducer:cartreducer
})

const middleware = [thunk]

const initialstate = {};
const store = createStore(reducers, initialstate,composeWithDevTools(applyMiddleware(...middleware)));
export default store