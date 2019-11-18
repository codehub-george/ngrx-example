import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loaderReducer } from '../loader/loader.reducer';

export interface State {
  loader: boolean;
}

export const reducers: ActionReducerMap<State> = {
  loader: loaderReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
