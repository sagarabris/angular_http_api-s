import { Injectable } from '@angular/core';

//importing the httpclientmodule
import { HttpClient } from '@angular/common/http';

import { User } from '../interface/user';

import { Observable } from 'rxjs';
// importing the enviroment
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  // using apiUrl is the variable using this because instead of using the url many times we can use variable
  private apiUrl=environment.apiUrl;

  // injecting it here in the constructor
  constructor(private http: HttpClient) { }
// ________________
// private is the scope of variable for this class
// type is of :HttpClient (mandatory)
// http -- you can give any name there

// _____________________________________
//userservice is the class and http is able in this class fully


//getting the multiple users
getUsers():Observable<User[]>{
  return this.http.get<User[]>(`${this.apiUrl}/users`)
}
// using this.apiUrl which is coming from env file 
// `${this.apiUrl} is the syntax used


// getting the single user
getUser(): Observable<User>{
  return this.http.get<User>(`${this.apiUrl}/users/1`)
}
//  used /1 to get the single user
}