import {fromJS} from 'immutable'
const defaultState = fromJS({
  count: 1
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    default:
      return state
  }
}