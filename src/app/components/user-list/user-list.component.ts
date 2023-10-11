import { Component, Input, Output, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/userList';
// import { LocalService } from 'src/app/local.service';
// import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
  


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // template: `{{ data }}`
  template: `
      <app-user-list></app-user-list>
    `
  })

export class UserListComponent {
  registeredUsers: any[] = [];
  ngOnInit(){
    const storedUsers = localStorage.getItem('user');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  // currentUser = () => {
  //   console.log("hello")
  // }
  
  currentUser(userName:string):void {
    // this.toDos = this.toDos.filter((item,index) => index !== indexToDelete);
    const storedUsersJson = localStorage.getItem('user');
    const storedUsers = storedUsersJson ? JSON.parse(storedUsersJson) : [];
    
    // console.log(storedUsersJson)
    for (var key in storedUsers){
      if (storedUsers[key].userName == userName){
        const curUser = storedUsers[key];
        localStorage.setItem('CurUser', JSON.stringify(curUser));
        // console.log(curUser);
      }
    }
  }
  // myUserList.override(localStorage.getItem('user'));
  // user:UserList[] = [];
  // storageUsers = this.user;

  // @Input() myUserList:UserList[];
  //  public usersList[] ;
  
    // <div *ngFor="let userList of usersList; let i = index"> 
    //   <div>{{userList.userName}} {{userList.userSex}} {{userList.userBirthday}}</div>
    // </div> 
}
// console.log(localStorage);
// console.log(localStorage.getItem('user'));
// console.log(currentUser);
