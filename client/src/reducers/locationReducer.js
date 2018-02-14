import { CHANGE_LOCATION } from '../actions/types';

export default function(state = 0, action) {
  //console.log(action);
  switch (action.type) {
    case CHANGE_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
