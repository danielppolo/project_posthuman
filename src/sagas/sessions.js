import {
  takeLatest,
  call,
  select,
  put,
  fork,
} from 'redux-saga/effects'

import {
  SESSION_SIGN_IN,
  SESSION_SIGN_OUT,
} from 'actions/sessions'

// import {
//   setRefundMax,
// } from 'actions-creators/auth'


// import {
//   fetchRefund as fetchRefundService,
//   fetchRefundMax as fetchRefundMaxService,
// } from 'services/auth'

// import navigateWithSearch from 'sagas/navigate-with-search'
import NProgress from 'nprogress'

function* signIn() {
  yield fork(NProgress.start)
  // const data = yield call(fetchRefundMaxService)
  // yield put(setRefundMax(data.money.amount))
  yield fork(NProgress.done)
}

export default function* sessions() {
  yield takeLatest(SESSION_SIGN_IN, signIn)
}
