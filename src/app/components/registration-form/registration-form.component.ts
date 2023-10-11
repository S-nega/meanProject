import { Component, Input, Output, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/userList';
import { LocalService } from 'src/app/local.service';
import { isLocalStorageAvailable } from 'ngx-webstorage-service/src';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})


export class RegistrationFormComponent implements OnInit{
  @Output() public usersList:UserList[] = [];
  // @Input()
  // localStorage:UserList[] = [];
  // makes: UserList[] = [];
  constructor() {  }

  userName:string = '';
  userEmail:string = '';
  userPassword:string = '';
  userSex:string = '';
  userBirthday:string = '';

  myUserList = [
    {
      userName: 'Snegaa',
      userEmail: 'Snega@s.s',
      userPassword: '12345',
      userSex: 'Female',
      userBirthday: '2002-01-23',
    },
    {
      userName: 'Leshaa',
      userEmail: 'Snega@s.s',
      userPassword: '12345',
      userSex: 'Male',
      userBirthday: '2002-01-23',
    },
  ]


  ngOnInit(): void {
    // this.myUserList.push(JSON.parse(localStorage.getItem('user'))); 
  }

  addUser(){
    if (this.userName.length >= 3 && 
        this.userPassword.length >= 6 &&
        this.userEmail.indexOf('@') < this.userEmail.lastIndexOf('.') &&
        this.userSex &&
        this.userBirthday)
    {
      var user =
        {
          userName: this.userName,
          userEmail: this.userEmail,
          userPassword: this.userPassword,
          userSex: this.userSex,
          userBirthday: this.userBirthday,
        }

      // console.log("myUserList 1", this.myUserList);
      // console.log("localStorage 1", localStorage.getItem('user'));
      // myUserList = localStorage;
      // this.myUserList.push(JSON.parse(localStorage.getItem('user')));
      
      // this.myUserList.push(user)
      // localStorage.setItem('user', JSON.stringify(this.myUserList));
      // var ul = localStorage.setItem('user', JSON.stringify(this.myUserList));
      
      // this.myUserList.push(ul);
      // console.log("myUserList 2", this.myUserList);
      // console.log("localStorage 2", localStorage.getItem('user'));

      // localStorage.clear();

      const exUsersJson = localStorage.getItem('user');
      const exUsers = exUsersJson ? JSON.parse(exUsersJson) : [];
      exUsers.push(user);
      localStorage.setItem('user', JSON.stringify(exUsers));

      this.userName = "";
      this.userEmail = "";
      this.userPassword = "";
      this.userSex = "";
      this.userBirthday = "";
    }
  }
}
