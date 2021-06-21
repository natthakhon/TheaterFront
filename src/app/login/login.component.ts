import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import {CustomErrorStateMatcher} from 'src/app/validation/CustomErrorStateMatcher';
import { HttpClient,} from '@angular/common/http';
import {UserService} from 'src/app/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginService} from 'src/app/services/login.service'
import {Login} from 'src/app/viewmodel/login'
import {User} from 'src/app/viewmodel/user'
import { v4 as uuidv4 } from 'uuid';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    {provide:ErrorStateMatcher,useClass:CustomErrorStateMatcher}
  ]  
})
export class LoginComponent implements OnInit {

  isSpinnerVisible:boolean= false;
  hide = true;
  loginForm!: FormGroup;  

  constructor(private fb: FormBuilder,
    private http:HttpClient,
    private snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    
    this.iniForm();
  }

  iniForm(){
    this.loginForm = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    });
  }

  submit(){
    let found = false;
    this.isSpinnerVisible = true;
    const service = new UserService(this.http);
    service.getUserByEmail(this.loginForm.controls['user'].value,this.loginForm.controls['password'].value)
      .subscribe(data=>{
        if (data != null){
          found = true;
          if (this.login(data)){            
            this.router.navigate(['/moviedashboard']);
          }
        }
      }
      ,()=>{this.isSpinnerVisible = false;}
      ,()=>{
        if (!found){
          service.getUserByUser(this.loginForm.controls['user'].value,this.loginForm.controls['password'].value)
          .subscribe(data=>{
            if (data != null){
              found = true;
              if (this.login(data)){                
                this.router.navigate(['/moviedashboard']);
              }
            }
          }
          ,()=>{this.isSpinnerVisible = false;}
          ,()=>{  
            if (!found){
              this.snackBar.open("Not a valid user", "OK");
            }
          });
        }
        this.isSpinnerVisible = false;
      });
  }

  login(user:User):boolean{
    const service = new LoginService(this.http);
    let login = new Login(uuidv4(),user,new Date(),false);
    service.addlogin(login).subscribe(data=>{
      if(data!=null){
        console.log('11111');
        return true;
      }
      console.log('22222');
      return false;
    })
    console.log('333333');
    return false;
  }
}
