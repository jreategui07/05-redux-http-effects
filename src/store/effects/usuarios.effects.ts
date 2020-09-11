import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map } from 'rxjs/operators';
import * as usuasriosActions from '../actions/usuasrios.actions';
import { UsuarioService } from '../../app/services/usuario.service';

@Injectable()
export class UsuariosEffect {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) { }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuasriosActions.cargarUsuarios), // filtramos solo el action "cargarUsuarios"
      // tap(data => console.log('effect tap', data)), // para visualizar como está viajando la data
      mergeMap( // mergeMap nos permite ejecutar un nuevo observable y retornalo mezclado con el observable anterior
        () => this.usuarioService.getUsers().pipe( // llamamos al servicio
          // tap(data => console.log('get users effect', data))
          map(users => usuasriosActions.cargarUsuariosSuccess({ usuarios: users })) // una vez obtenida la data disparamos la acción success
        )
      ),
    )
  );

}
