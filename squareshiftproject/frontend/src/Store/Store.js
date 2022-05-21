import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducers = combineReducers({
   
})







const intialstate = {
  

}
const middleware = [thunk]


const store = createStore(reducers, intialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store