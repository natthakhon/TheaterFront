import { Component  } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component'
import {UserComponent} from 'src/app/user/user.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'theater';
  showFiller = false;
  islogin!:boolean

  public onRouterOutletActivate(event : any) {
    if (event instanceof LoginComponent || event instanceof UserComponent){
      this.islogin = false;
    }
    else{
      this.islogin = true;
    }
  }
}
