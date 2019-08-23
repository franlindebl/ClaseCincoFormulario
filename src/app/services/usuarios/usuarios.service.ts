import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosList: string[] = ['Fran', 'Ginés', 'María'];

  constructor() { }

  public getUsuariosList() {
    return this.usuariosList;
  }

  public addUser(username: string) {
    this.usuariosList.push(username);
  }
}
