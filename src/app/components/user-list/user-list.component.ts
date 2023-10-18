import { Component, Input, Output, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/userList';
// import { LocalService } from 'src/app/local.service';
// import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import User from 'src/app/models/user';
// import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // template: `
  //     <app-user-list></app-user-list>
  //   `
  })

export class UserListComponent{
  registeredUsers: any[] = [];
  regUsers: any[] = [];
  // user: any[] = [];

  // dbUsers: UserService[] = [];
  // private userService: UserService;
  // userService: UserService[] = [];  

  // dbParsedUser;
  // constructor(private service: UserService){}
  // constructor(private userService: UserService) { }

  // userService = UserService;
  
  ngOnInit(){
    console.log("userlist")
// const storedUsers: [] = [];    
    // this.registeredUsers = User.find({}, {_id:0, "urlz.longurl":1 })
    // this.registeredUsers = UserService.getUsers();
    // this.registeredUsers = User
    // .subscribe(
    //   (receivedUsers) => {
    //     //obrabotka
    //     this.user = receivedUsers; 
    //     // storedUsers = receivedUsers; 
    //     console.log("userSercvice");
    //     // console.log(user);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );

    // const dbUsers = UserService.getUsers();
    
    const storedUsers = localStorage.getItem('user');
    
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers); 
    }

    // this.regUsers = userService.getRegUsers();
    // this.registeredUsers = UserService.getRegUsers();
  }

  currentUser(userName:string):void {
    
    const storedUsersJson = localStorage.getItem('user');
    const storedUsers = storedUsersJson ? JSON.parse(storedUsersJson) : [];
    
    for (var key in storedUsers){
      if (storedUsers[key].userName == userName){
        const curUser = storedUsers[key];
        localStorage.setItem('CurUser', JSON.stringify(curUser));
      }
    }
  }
}
