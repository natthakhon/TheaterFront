export class User{
  name : string
  lastname : string
  phone: string
  email: string
  userName:string
  password: string

  constructor(name : string,
    lastname : string,
    phone: string,
    email: string,
    username:string,
    password: string){
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.userName = username;
        this.password = password;
    }
}
