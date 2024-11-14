import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private USUARIOS: string = '/usuarios';

  private apiUrlUsuarios = environment.apiUrl.concat(this.USUARIOS);

  constructor(private http: HttpClient) {
  }

  public cadastrarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrlUsuarios, usuario);
  }

  public listarUsuarios() {
    return this.http.get<Usuario[]>(this.apiUrlUsuarios);
  }

  public deleteUsuario(usuario: Usuario) {
    this.http.delete(this.apiUrlUsuarios.concat('/').concat(usuario.id.toString()));
  }

  public atualizarUsuario(usuario: Usuario) {
    return this.http.patch<Usuario>(this.apiUrlUsuarios.concat('/').concat(usuario.id.toString()), usuario);
  }

}
