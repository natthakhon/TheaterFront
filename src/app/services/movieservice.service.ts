import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../viewmodel/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private url:string = environment.apiurl;

  constructor(private http: HttpClient) { }

  addMovie(movie:Movie): Observable<Movie>{
    return this.http.post<Movie>(this.url+environment.urlsuffix.movie.movie, movie);
  }
  
  getAll(){
    return this.http.get<Movie[]>(this.url+environment.urlsuffix.movie.movie);
  }
}
