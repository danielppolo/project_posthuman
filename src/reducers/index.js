import { combineReducers } from 'redux-immutable'
import ui from 'reducers/ui'

const createRootReducer = () => combineReducers({
  ui,
})

export default createRootReducer
