import { setUserAuth } from './authReducer';

const INITIALIZED_SUCCESSES = 'INITIALIZED_SUCCESSES'

let defaultState = {
  initialized: false
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSES:
      return {
        ...state, initialized: true
      }
    default:
      return state
  }
}

export const initializedSuccesses = () => ({ type: INITIALIZED_SUCCESSES })

export const initialize = () => async (dispatch) => {
  let promise = await dispatch(setUserAuth())
  Promise.all([promise])
  dispatch(initializedSuccesses())
}

