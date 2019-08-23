import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {
  public usuariosList: string[] = null;

  constructor(private usuariosService: UsuariosService) {

  }

  ngOnInit() {
    this.usuariosList = this.usuariosService.getUsuariosList();
  }

}
