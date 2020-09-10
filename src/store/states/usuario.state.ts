import { Usuario } from '../../app/models/usuario.model';

export interface UsuarioState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}
