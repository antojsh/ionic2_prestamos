import {Injectable} from '@angular/core'

@Injectable()
export class SessionService{
    constructor(){ }

    set_session(token){
        localStorage.setItem('session',token);    
    }



    get_session(){
        return localStorage.getItem('session')
    }
}