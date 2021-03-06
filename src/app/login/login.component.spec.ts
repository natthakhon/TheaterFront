import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginComponent } from './login.component';
import { HttpClient,HttpHandler } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[FormBuilder,HttpClient,HttpHandler,MatSnackBar]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
