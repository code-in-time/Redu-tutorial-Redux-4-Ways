import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';
import fetchUserEpic from './epic';
import appData from './dataReducer'

export const rootEpic = combineEpics(
    fetchUserEpic
    // next epic
  );

const rootReducer = combineReducers({
    appData
    // next reducer
})

export default rootReducer;
