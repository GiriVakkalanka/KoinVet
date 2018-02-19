import { TOGGLE_DRAWER } from '../actions/types';
//import { defaultState } from './defaultState.js';

export default function(state = true, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      console.log(state);
      const drawer = !state;
      //const expertise = state;
      //expertise.push(action.payload);
      //console.log([...state, action.payload]);
      return drawer;
    default:
      //console.log(action.payload);
      return state;
  }
}
