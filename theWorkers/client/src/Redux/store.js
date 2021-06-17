

import { createStore, combineReducers,applyMiddleware } from 'redux';
import ReduserEmployee from './Reducer/ReduserEmployee'
import {PermissionMiddaleWare,AllEmployeeMiddaleWare,AddEmployeeMiddaleWare,SaveChangesMiddaleWare} from './middleware/crud'
import { actions } from "../Redux/action"

const reducer = combineReducers({ ReduserEmployee})
const store = createStore(reducer,applyMiddleware(PermissionMiddaleWare,AllEmployeeMiddaleWare,AddEmployeeMiddaleWare,SaveChangesMiddaleWare))
window.store = store

export default store



