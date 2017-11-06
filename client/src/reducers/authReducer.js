import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch(action.type){
    case FETCH_USER:
      return action.payload || false;
      // this returns the user instance
    default:
      return state;
  }
}
