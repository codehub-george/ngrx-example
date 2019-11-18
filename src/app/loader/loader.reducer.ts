import { createReducer, on } from '@ngrx/store';
import { show, hide } from './loader.actions';

export const initialState = false;

// tslint:disable-next-line: variable-name
const _loaderReducer = createReducer(initialState,
    on(show, state => true),
    on(hide, state => false),
);

export function loaderReducer(state: boolean, action) {
    return _loaderReducer(state, action);
}
