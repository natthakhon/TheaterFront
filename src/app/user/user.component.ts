import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import {CustomErrorStateMatcher} from 'src/app/validation/CustomErrorStateMatcher';

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
    name:[],
    lastname:[],
    email:['',[Validators.required,Validators.email]],
    phone:[],
    user:[null,Validators.required],
    password:[null,Validators.required]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
