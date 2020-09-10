import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import * as states from './states';

export interface AppState {
    usuarios: states.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer,
};
