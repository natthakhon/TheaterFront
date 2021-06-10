import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Search} from 'src/app/viewmodel/search'
import {MatPaginator} from '@angular/material/paginator';
import { Movie } from '../viewmodel/Movie';

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

  constructor() { }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.result = this.search.getresult(sdgfvd =>
    {
      const m = new Movie();
      m.moviename = '1111';
      const m1 = new Movie();
      m1.moviename = '222';
      return of([
        m,m1
      ]);
    });

    this.result.subscribe(p=>{
      this.datasource = new MatTableDataSource<Movie>(p)
    });
  }



}
