import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient,} from '@angular/common/http';
import {CustomErrorStateMatcher} from 'src/app/validation/CustomErrorStateMatcher';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css'],
  providers:[
    {provide:ErrorStateMatcher,useClass:CustomErrorStateMatcher}
  ]  
})
export class TheaterComponent implements OnInit {

  theaterFrom! : FormGroup;

  constructor(private fb: FormBuilder,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.iniForm();
  }

  iniForm(){
    this.theaterFrom = this.fb.group({
      name:['',Validators.required]
    });
  }

}
