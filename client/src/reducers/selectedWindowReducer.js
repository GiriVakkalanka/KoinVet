import { SELECT_WINDOW } from '../actions/types';

export default function(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case SELECT_WINDOW:
      return action.payload;
    default:
      return state;
  }
}
