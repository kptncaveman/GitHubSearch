import {Injectable} from '@angular/core'; 
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()
export class GithubService{
    private username:string;
    private client_id = 'f6a1d55a16e9fba645c9';
    private client_secret ='094b37a13593241e7dd368cd81a3206e3f019558';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'kptncaveman';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id-='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
}
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id-='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
}

    updateUser(username:string){
        this.username = username;        
    }
}