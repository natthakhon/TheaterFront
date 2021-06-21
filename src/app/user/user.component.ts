import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
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
  userForm!: FormGroup;  
  isSpinnerVisible:boolean= false ;

  constructor(private fb: FormBuilder, 
    private http:HttpClient,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.iniForm();
  }

  iniForm(){
    this.userForm = this.fb.group({
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
  }

  submit(){
    const user = new User(
      this.userForm.controls["name"].value,
      this.userForm.controls["lastname"].value,
      this.userForm.controls["phone"].value,
      this.userForm.controls["email"].value,
      this.userForm.controls["user"].value,
      this.userForm.controls["password"].value);

    const service = new UserService(this.http);
    this.isSpinnerVisible = true;
    service.addUser(user).subscribe(data=>{
      this.snackBar.open("Saved", "OK");
      this.isSpinnerVisible = false;
      this.iniForm();
    },err=>{
      this.isSpinnerVisible = false;
      this.snackBar.open("Error", "OK");
    });
  }
}
