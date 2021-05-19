import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from 'src/app/viewmodel/user'
import { Observable,} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = environment.apiurl;
  private headers: Headers = new Headers({});

  
  constructor(private http: HttpClient) {
    this.headers.append('Content-Type','application/x-www-form-urlencoded');
    this.headers.append('Content-Type','application/json');
   }

  addUser(user:User): Observable<User>{
    return this.http.post<User>(this.url+environment.urlsuffix.user.create, user);
  }
}
