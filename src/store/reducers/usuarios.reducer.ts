import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { UsuarioState } from '../states';

export const usuariosInitialState: UsuarioState = {
    users: [],
    loaded: false,
    loading: false,
    error: []
};

const _counterReducer = createReducer(usuariosInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosSuccess, (state, { usuarios }) => ({
        ...state,
        loading: false,
        loaded: true,
        usuarios: [...usuarios]
    })),
    on(cargarUsuariosError, (state, { payload }) => ({
        ...state,
        loaded: false,
        loading: false,
        error: payload
    })),
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
