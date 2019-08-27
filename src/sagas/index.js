import {
  fork,
} from 'redux-saga/effects'

import sessions from './sessions'


export default function* rootSaga() {
  yield fork(sessions)
}
