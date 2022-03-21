import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { LoginInterface} from '../../models/login.interface';
import { ResponseInterface } from '../../models/responsive.interface';
import { User } from '../../models/user';
import { ResponseRequest } from '../../models/usersRegisters.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = 'https://reqres.in/';
  public urlUser = this.url + 'api/';
  public urlUsers = this.urlUser + 'users';

  constructor(private http: HttpClient) { }
  // Iniciar sesion
  public loginUser(form: LoginInterface): Observable<ResponseInterface> {
    const urlApi = this.url + 'api/login';
    return this.http.post<ResponseInterface>(urlApi, form);

  }
 // Mostrar todos los usuarios llamada a la api
  public getAllUsersRegister() {
    const url = this.urlUsers;
    return this.http.get<ResponseRequest>(url)
    .pipe(
      map( (resp) => {
          return resp.data.map( (user) => User.userApi(user));
          }),
    );
  }
  //Mostrar un usuario llamada a la api
  public getById(id) {
    return this.http.get( this.urlUser + 'users/' + id);
  }
 }
