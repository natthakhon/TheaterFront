import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient,} from '@angular/common/http';
import {CustomErrorStateMatcher} from 'src/app/validation/CustomErrorStateMatcher';
import { ErrorStateMatcher } from '@angular/material/core';
import { Movie } from 'src/app/viewmodel/movie';
import {MovieService} from 'src/app/services/movieservice.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[
    {provide:ErrorStateMatcher,useClass:CustomErrorStateMatcher}
  ]  
})
export class MovieComponent implements OnInit {

  movieForm! : FormGroup;
  isSpinnerVisible:boolean= false ;

  constructor(private fb: FormBuilder,
    private http:HttpClient,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.iniMovieForm();
  }

  iniMovieForm(){
    this.movieForm = this.fb.group({
      name:['',Validators.required]
    });
  }

  addmovie(){
    let movie = new Movie();
    movie.moviename = this.movieForm.get('name')?.value;

    const service = new MovieService(this.http);
    this.isSpinnerVisible = true;
    service.addMovie(movie).subscribe(o=>{
      this.snackBar.open("Movie Saved", "OK");
      this.iniMovieForm();
      this.isSpinnerVisible = false;
    })
  }
}
