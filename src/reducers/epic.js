import { FETCHING_DATA } from '../constants'
import { getDataSuccess, getDataFailure } from './actions'
import getPeople from '../api'

import { from, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCHING_DATA),
  mergeMap(() => from(getPeople()).pipe(
    map(getDataSuccess),
    catchError(error => of(getDataFailure(error)))
  ))
);

export default fetchUserEpic;