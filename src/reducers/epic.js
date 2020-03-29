import { FETCHING_DATA } from '../constants'
import { getDataSuccess, getDataFailure } from './actions'
import getPeople from '../api'
import { mergeMap, filter, mapTo, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import 'rxjs'
import { Observable } from 'rxjs/Observable'

// const fetchUserEpic = action$ =>
// action$.pipe(
//   ofType(FETCHING_DATA),
//   mergeMap(action => {
//     return Observable.fromPromise(getPeople())
//       .flatMap(payload => [
//         response => getDataSuccess(response)
//       ])
//       .catch(error =>
//         Observable.of(error => getDataFailure(error))
//       );
//   })
// );

// Example 1
// import { mergeMap, filter, mapTo } from 'rxjs/operators';
const fetchUserEpic = action$ => action$.pipe(
  filter(action => action.type === FETCHING_DATA), // recieve action type
  delay(2000), // delay
  mapTo({ type: 'PONG' })   // dispatch this action
);

export default fetchUserEpic


// const fetchUserEpic = action$ =>
//   action$.ofType(FETCHING_DATA)
//     .mergeMap(action =>
//       Observable.fromPromise(getPeople())
//         .map(response => getDataSuccess(response))
//         .catch(error => Observable.of(getDataFailure(error)))
//       )

// export default fetchUserEpic