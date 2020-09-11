import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { UsuarioState } from '../states';

export const usuariosInitialState: UsuarioState = {
    users: [],
    loaded: false,
    loading: false,
    error: []
};

const _usuariosReducer = createReducer(usuariosInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosSuccess, (state, { usuarios }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...usuarios]
    })),
    on(cargarUsuariosError, (state, { payload }) => ({
        ...state,
        loaded: false,
        loading: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
        }
    })),
);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}
