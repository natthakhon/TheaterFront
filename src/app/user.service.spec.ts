import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from './viewmodel/user';
import { environment } from 'src/environments/environment';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should post and saved',()=>{
    let user: User = new User('name','lastname','phone','email','username','password');
    service.addUser(user).subscribe(res=>{
      expect(res.name).toEqual(user.name);
    })
    const request = httpTestingController.expectOne(environment.apiurl+environment.urlsuffix.user.user);
    expect(request.request.method).toBe('POST');
    request.flush(user);
  })
});
