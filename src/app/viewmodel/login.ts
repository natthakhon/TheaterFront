import { User } from './user';

export class Login{
    loginid!:string
    user!:User
    logdate!:Date
    isoff!:boolean
    constructor(id:string,user:User,logdate:Date,isoff:boolean){
        this.loginid=id;
        this.user=user;
        this.isoff=isoff;
        this.logdate=logdate;
    }
}