import { Component, Input, Output, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/userList';
// import { LocalService } from 'src/app/local.service';
// import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  template: `
      <app-user-list></app-user-list>
    `
  })

export class UserListComponent{
  registeredUsers: any[] = [];
  // dbUsers: UserService[] = [];
  // private userService: UserService;
  // userService: UserService[] = [];
  user: any[] = [];
  // dbParsedUser;
  
  constructor(private userService: UserService) { }

  ngOnInit(){
// const storedUsers: [] = [];    
    this.userService.getUsers().subscribe(
      (receivedUsers) => {
        //obrabotka
        this.user = receivedUsers; 
        // storedUsers = receivedUsers; 
        console.log("userSercvice");
        // console.log(user);
      },
      (error) => {
        console.error(error);
      }
    );

    // const dbUsers = UserService.getUsers();
    
    const storedUsers = localStorage.getItem('user');
    
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
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
