import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {
  public username: string = 'Default name';

  constructor(private usuariosService: UsuariosService) {

  }

  ngOnInit() {
  }

  guardarUsuario() {
    this.usuariosService.addUser(this.username);
    this.username = '';
    alert('Usuario registrado');
  }

}
