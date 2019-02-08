// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`

  LOGIN_CHECK
  STARTUP
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE
  LOGOUTCLIENT

  SET_ERROR
  CLEAR_ERROR
  SET_LOADER
  CLEAR_LOADER
  SET_LOADINGSCREEN
  CLEAR_LOADINGSCREEN
`)
