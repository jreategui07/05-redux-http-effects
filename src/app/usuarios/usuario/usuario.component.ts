import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { cargarUsuario } from '../../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log(id);
      this.store.dispatch(cargarUsuario({ id }));
    });
  }

}
