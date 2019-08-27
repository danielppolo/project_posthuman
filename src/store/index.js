import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable'
import createRootReducer from 'reducers'
import rootSaga from 'sagas'

const initialState = fromJS({
  session: {
  },
})

function configureStore(preloadedState = initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [
    sagaMiddleware,
  ]
  const enhancers = []
  const composedEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const enhancerComposed = composedEnhancers(applyMiddleware(...middleware), ...enhancers)
  const store = createStore(createRootReducer(), preloadedState, enhancerComposed)

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
