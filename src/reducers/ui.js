import { fromJS } from 'immutable'
import {
  DARK_MODE_ON,
} from 'actions/ui'

const initialState = fromJS({
  darkMode: false,
})

const config = (state = initialState, { type, payload }) => {
  switch (type) {
    case DARK_MODE_ON:
      return state.set('darkMode', payload)
    default: return state
  }
}

export default config
