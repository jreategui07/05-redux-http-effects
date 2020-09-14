import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { UsuarioState } from '../states/usuario.state';

export const usuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: []
};

const _usuarioReducer = createReducer(usuarioInitialState,
  on(cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id,
    user: null,
    error: []
  })),
  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
    error: []
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
    user: null
  })),
);

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
