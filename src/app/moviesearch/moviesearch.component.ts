import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable,  } from 'rxjs';
import {Search} from 'src/app/viewmodel/search'
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient,} from '@angular/common/http';
import { Movie } from '../viewmodel/movie';
import {MovieService} from 'src/app/services/movieservice.service'

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css']
})
export class MoviesearchComponent implements OnInit {

  search : Search<Movie[]> = new Search();
  result!:Observable<Movie[]>
  datasource! : MatTableDataSource<Movie>;
  displayedColumns: string[] = ['moviename'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchValue!: string;

  constructor(private http:HttpClient) { }

  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
    const service = new MovieService(this.http);
    this.result = this.search.getresult(()=>{
      return service.getAll();
    })  
    
    this.result.subscribe(p=>{
      this.datasource = new MatTableDataSource<Movie>(p)
      this.datasource.paginator = this.paginator;
    });
  }



}
