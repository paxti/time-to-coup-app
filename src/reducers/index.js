import * as types from '../constants/ActionTypes';

const initialState = {
  sessionActive: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.START_SESSION:
      return Object.assign({}, state, {
        sessionActive: true
      });
    case types.END_SESSION:
      return Object.assign({}, state, {
        sessionActive: false
      });
    default:
      return state;
  }
}
