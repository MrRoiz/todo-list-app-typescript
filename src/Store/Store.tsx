import { createStore } from 'redux'
import MainReducer from './Reducers/MainReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const Store = createStore(MainReducer,undefined,composeWithDevTools())

export default Store