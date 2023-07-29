import { Injectable } from '@angular/core';

//importing the httpclientmodule
import { HttpClient } from '@angular/common/http';

import { User } from '../interface/user';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
}
 
// getting the single user
getUser(): Observable<User>{
  return this.http.get<User>('https://jsonplaceholder.typicode.com/users/2')
}
}