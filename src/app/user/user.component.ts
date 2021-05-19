import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import {CustomErrorStateMatcher} from 'src/app/validation/CustomErrorStateMatcher';
import {FormValidators} from 'src/app/validation/FormValidators'
import {User} from 'src/app/viewmodel/user'
import { HttpClient,} from '@angular/common/http';
import {UserService} from 'src/app/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[
    {provide:ErrorStateMatcher,useClass:CustomErrorStateMatcher}
  ]  
})

export class UserComponent implements OnInit {
  hide = true;

  userForm = this.fb.group({
    name:[''],
    lastname:[''],
    email:['',[
      Validators.required,
      Validators.email
      ]
    ],
    phone:[''],
    user:[null,Validators.required],
    password:['',[
      Validators.required,
      FormValidators.PasswordValidator
      ]
    ]
  });
  
  constructor(private fb: FormBuilder, 
    private http:HttpClient,
    private snackBar: MatSnackBar) 
    { }

  ngOnInit(): void {
  }

  submit(){
    const user = new User(
      this.userForm.controls["name"].value,
      this.userForm.controls["lastname"].value,
      this.userForm.controls["phone"].value,
      this.userForm.controls["email"].value,
      this.userForm.controls["user"].value,
      this.userForm.controls["password"].value);
    
    console.log(user);
    const service = new UserService(this.http);
    service.addUser(user).subscribe(data=>{
      this.snackBar.open("Saved", "OK");
    });
  }

}
