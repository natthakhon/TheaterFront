import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable,} from 'rxjs';
import { environment } from 'src/environments/environment';
import {Login} from 'src/app/viewmodel/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string = environment.apiurl;

  constructor(private http: HttpClient) { }

  addlogin(login:Login):Observable<Login>{
    return this.http.post<Login>(this.url+environment.urlsuffix.login.login,login);    
  }

}
