import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HTTP-API';


  ngOnInit():void{
    this.onGetUsers()
    this.onGetUser()
   
  }
  // injecting the user service
  // syntax- constructor(method name: type of)
  // userService is the name it can be anything
  constructor(private userService: UserService){}

  onGetUsers():void{
    this.userService.getUsers().subscribe(
      (response)=>console.log(response),
      (error :any)=>console.log(error),
      ()=> console.log('Done getting the users')
    );
  }

  onGetUser():void{
    this.userService.getUser().subscribe(
      (response)=>console.log(response),
      (error :any)=>console.log(error),
      ()=> console.log('Done getting the user')
    )
  }
}

