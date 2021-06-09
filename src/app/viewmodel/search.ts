import { Observable } from "rxjs";

export interface IServiceCaller<T>{
    (url:string):Observable<T>
}

export class Search<T>{
    searchText : string
    searchMap : Map<string,string>
    showall : boolean    
    showallurl:string
    selectedmap : string
    constructor(){
        this.searchText = '';
        this.searchMap = new Map();
        this.showall = false;
        this.showallurl = '';
        this.selectedmap = ''
    }

    getresult(caller:IServiceCaller<T> ):Observable<T>{
        if (this.showall)
            return caller(this.showallurl);
        else{
            let url = this.searchMap.get(this.selectedmap)!;
            return caller(url)
        }
    }
}