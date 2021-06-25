import { Component  } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component'
import {UserComponent} from 'src/app/user/user.component'
import {MovieDashboardComponent} from 'src/app/movie-dashboard/movie-dashboard.component'
import {ActivatedRoute,} from "@angular/router";
import {MovieService} from 'src/app/services/movieservice.service'
import { HttpClient,} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'theater';
  showFiller = false;
  islogin!:boolean
  username!:string;

  constructor(private activeroute: ActivatedRoute,
    private http:HttpClient){
      this.username = '';
    }

  public onRouterOutletActivate(event : any) {
    if (event instanceof LoginComponent || event instanceof UserComponent){
      this.islogin = false;
    }
    else{
      this.islogin = true;
    }
    if (event instanceof MovieDashboardComponent && this.username == ''){
      this.activeroute.queryParams
      .subscribe(params=>{
        const movieService = new MovieService(this.http);
        movieService.getLogin(params.id)
        .subscribe(data=>{
          this.username = data.user.userName;
        })  
      });
    }
  }
}
