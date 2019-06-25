/*
 *
 * HireVibes reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_STAKE, FETCHED_STAKE } from './constants';

const initialState = fromJS({
  loading: false,
  stakes: [],
});

function HireVibesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAKE:
      return state.set('loading', true);
    case FETCHED_STAKE:
      return state.set('stakes', action.stakes).set('loading', false);
    default:
      return state;
  }
}

export default HireVibesReducer;