import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { usersReducer } from './reducers/usersReducer';
import { authReducer } from './reducers/authReducer';
import { appReducer } from './reducers/appReducer';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

// let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store