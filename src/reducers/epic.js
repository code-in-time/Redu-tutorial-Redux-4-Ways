import { FETCHING_DATA } from '../constants'
import { getDataSuccess, getDataFailure } from './actions'
import getPeople from '../api'

import { from, Observable, of} from 'rxjs';
// import 'rxjs'
// import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// const fetchUserEpic = action$ =>
//   action$.ofType(FETCHING_DATA)
//     .mergeMap(action =>
//       Observable.fromPromise(getPeople())
//         .map(response => getDataSuccess(response))
//         .catch(error => Observable.of(getDataFailure(error)))
//       )

// const fetchUserEpic = action$ =>
//   action$.pipe(  //fixed
//     ofType(FETCHING_DATA),
//     mergeMap(action => {
//       return from(getPeople())
//         .flatMap(payload => [
//           {
//             type: 'SIGNUP_CONCIERGE_SUCCESS',
//             payload
//           }
//         ])
//         .catch(error =>
//           of({
//             type: 'SIGNUP_CONCIERGE_ERROR',
//             payload: { error }
//           })
//         );
//     })
//   );

const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCHING_DATA),
  mergeMap(action => getPeople())
    .pipe(
      map(response => getDataSuccess(response)),
      catchError(error => getDataFailure(error)),
  )
);


export default fetchUserEpic