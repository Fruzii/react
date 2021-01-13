import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { usersReducer } from './reducers/usersReducer';
import { authReducer } from './reducers/authReducer';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store