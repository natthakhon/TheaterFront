import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Movie} from 'src/app/viewmodel/Movie'
import { Observable,} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url:string = environment.apiurl;

  constructor(private http: HttpClient) { }

  addMovie(movie:Movie): Observable<Movie>{
    return this.http.post<Movie>(this.url+environment.urlsuffix.movie.movie, movie);
  }
  
}
