import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from 'src/app/login/login.component'
import {UserComponent} from 'src/app/user/user.component'
import {MovieDashboardComponent} from 'src/app/movie-dashboard/movie-dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'moviedashboard', component: MovieDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
