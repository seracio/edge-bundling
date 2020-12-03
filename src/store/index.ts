import _ from 'lodash/fp';
import { of, BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import {} from './services';

// helpers
const isType = type => action => action.type === type;

// streams
const action$ = new BehaviorSubject({ type: null });

export const dispatcher$ = of(action$).pipe(shareReplay(1));
