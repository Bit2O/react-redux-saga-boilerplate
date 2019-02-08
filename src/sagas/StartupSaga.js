import { take, put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import MiddlewareTypes from '../actions/MiddlewareTypes'
import Types from '../actions/Types'
import Actions from '../actions/Creators'

// process STARTUP actions
export function* watchStartup() {
  yield take(Types.STARTUP)
}
