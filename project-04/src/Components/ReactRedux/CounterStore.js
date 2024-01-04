import {applyMiddleware, createStore} from 'redux'
import CounterReducer from './CounterReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'

const middleware=[thunk]
const CounterStore=createStore(
    CounterReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default CounterStore