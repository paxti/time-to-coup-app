import * as types from '../constants/ActionTypes';

const initialState = {
  test: false
};

export default function read(state = initialState, action) {
  switch (action.type) {
    case types.DO_SOMETHING:
      return Object.assign({}, state, {
        test: 'did something'
      });
    default:
      return state;
  }
}
