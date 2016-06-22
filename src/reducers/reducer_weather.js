import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Not supposed to a promise here:', action)

  switch(action.type) {
  case FETCH_WEATHER:
    // always return a new instance of state
    return [action.payload.data, ...state]; //[city, city, city] es6 way of.. return state.concat([action.payload.data]);
  }
  return state;
}
