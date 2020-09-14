import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usuasriosActions from '../actions';
import { UsuarioService } from '../../app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffect {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) { }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuasriosActions.cargarUsuario),
      mergeMap(
        ( action ) => this.usuarioService.getUserById(action.id).pipe(
          map(user => usuasriosActions.cargarUsuarioSuccess({ usuario: user })),
          catchError(err => of(usuasriosActions.cargarUsuarioError({ payload: err })))
        )
      ),
    )
  );

}
