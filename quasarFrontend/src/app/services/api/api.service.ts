import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { LoginInterface} from '../../models/login.interface';
import { ResponseInterface } from '../../models/responsive.interface';
import { ResponseRequest } from '../../models/usersRegisters.interface';
import { User } from '../../models/user';
import { UserR } from 'src/app/models/userR';
import { TrackHttpError } from '../../models/trackHttpError';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = 'https://reqres.in/';
  public urlUser = this.url + 'api/';
  public urlUsers = this.urlUser + 'users';

  constructor(private http: HttpClient) { }

  public loginUser(form: LoginInterface): Observable<ResponseInterface> {
    const urlApi = this.url + 'api/login';
    return this.http.post<ResponseInterface>(urlApi, form);

  }

  public getAllUsersRegister() {
    const url = this.url + 'api/users';
    return this.http.get<ResponseRequest>(url)
    .pipe(
      map( resp => {
          return resp.data.map( user => User.userApi(user))
          })
    )
  }

  getUser(userId: string): Observable<UserR> {
    const url = this.urlUsers + userId;
    return this.http.get<UserR>(url);

  }

  getDetails(id: number) {
    const url = this.urlUsers;

    return this.http.get<UserR>(`${url}/${id}`);
  }

  getById(id){
    return this.http.get( this.urlUser + 'users/' + id);
  }
 }
