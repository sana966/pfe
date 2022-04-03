import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { User } from '../user'
import { User } from 'app/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient: HttpClient ) { }
  getAuth(){
    return this.httpClient.get('http://127.0.0.1:8000/users');
  }
  

}
