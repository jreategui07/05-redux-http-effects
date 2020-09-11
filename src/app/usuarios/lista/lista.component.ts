import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { cargarUsuarios } from '../../../store/actions/usuasrios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  users: Usuario[] = [];
  loading = false;
  error: any;

  constructor(
    // public usuarioService: UsuarioService
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    /* this.usuarioService.getUsers().subscribe(
      users => {
        console.log(users);
        this.users = users;
      }
    ); */
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(cargarUsuarios());
  }

}
