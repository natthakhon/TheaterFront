export class User{
  name : string
  lastname : string
  phone: string
  email: string
  user:string
  password: string

  constructor(name : string,
    lastname : string,
    phone: string,
    email: string,
    user:string,
    password: string){
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.user = user;
        this.password = password;
    }
}
