import Types from '../actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  username: null,
  loggedIn: false,
  attempting: false,
  user_id:null,
  name:null,
  passwordModifiedStatus: null
})
// login attempts
const attempt = (state, action) => state.merge({
  attempting: true,
  errorCode: null,
  loggedIn: false
})

// successful logins
const success = (state, action) => {
  //console.log("success: ", action);
  return state.merge({
    attempting: false,
    errorCode: null,
    user_id: action.user_id,
    username: action.username,
    name: action.name,
    fullname: action.fullname,
    loggedIn: true,
    profile_pic: action.profile_pic
  })
}

// login failure
const failure = (state, action) => state.merge({
  attempting: false,
  errorCode: action.errorCode,
  loggedIn: false
})

// logout
// const logout = (state, action) => state.merge({
//   user_id: null,
//   username: null,
//   name: null,
//   loggedIn: false,
//   attempting: false,
//   name: null,
//   fullname: null
// })

const resetSuccess = (state, action) => state.merge({
   reset: true
})

const reset = (state, action) => state.merge({
   reset: false
})


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_ATTEMPT]: attempt,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
//   [Types.RESET_PASSWORD_SUCCESS]: resetSuccess,
//   [Types.RESET_PASSWORD]: reset,
//   [Types.LOGOUTCLIENT]: logout
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
