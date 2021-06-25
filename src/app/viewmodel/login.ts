import { User } from './user';

export class Login{
    loginId!:string
    user!:User
    logDate!:Date
    isoff!:boolean
    constructor(id:string,user:User,logdate:Date,isoff:boolean){
        this.loginId=id;
        this.user=user;
        this.isoff=isoff;
        this.logDate=logdate;
    }
}