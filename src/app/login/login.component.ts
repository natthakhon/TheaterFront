import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import {CustomErrorStateMatcher} from 'src/app/validation/CustomErrorStateMatcher';
import { HttpClient,} from '@angular/common/http';
import {UserService} from 'src/app/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar) { }

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
        }
      });
    
    if (!found){
      service.getUserByUser(this.loginForm.controls['user'].value,this.loginForm.controls['password'].value)
      .subscribe(data=>{
        if (data != null){
          found = true;
        }
      });
    }
    
    if (!found){
      this.snackBar.open("Not a valid user", "OK");
    }

    this.isSpinnerVisible = false;
  }
}
