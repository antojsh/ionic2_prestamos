import {Injectable} from '@angular/core'
import { Http,Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService{
    constructor(private  http : Http){ }

    login(email, password){
        let url = 'http://localhost:1337/auth/';
        // var response = this.http.post(url).map(res => res.json());
        // return response;
        let json= JSON.stringify({email:email, password:password}); // Stringify payload
        let headers      = new Headers(); // ... Set content type to JSON
        headers.append( 'Content-Type', 'application/json' )
        

        return this.http.post(url, json,{
            headers: headers
        }) 
        .map(res => res.json()) 
        
    }
}