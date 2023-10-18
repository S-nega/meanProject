import { Component, Input, Output, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/userList';
import { LocalService } from 'src/app/local.service';
import { isLocalStorageAvailable } from 'ngx-webstorage-service/src';
// import { UserService } from 'src/app/services/user.service';
// import { HttpModule } from '@angular/common/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import {db.university} from "mongodb";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})


export class RegistrationFormComponent implements OnInit{
  // @Output() public usersList:UserList[] = [];
  // @Input()
  // localStorage:UserList[] = [];
  // makes: UserList[] = [];
  // constructor() {  }
  // newUser: any[] = [];
  // constructor(private userService: UserService) { }

  userName:string = '';
  userEmail:string = '';
  userPassword:string = '';
  userSex:string = '';
  userBirthday:string = '';

  // myUserList = [
  //   {
  //     userName: 'Snegaa',
  //     userEmail: 'Snega@s.s',
  //     userPassword: '12345',
  //     userSex: 'Female',
  //     userBirthday: '2002-01-23',
  //   },
  //   {
  //     userName: 'Leshaa',
  //     userEmail: 'Snega@s.s',
  //     userPassword: '12345',
  //     userSex: 'Male',
  //     userBirthday: '2002-01-23',
  //   },
  // ]
  ngOnInit(): void {
    console.log("registration")
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

      const exUsersJson = localStorage.getItem('user');
      const exUsers = exUsersJson ? JSON.parse(exUsersJson) : [];
      exUsers.push(user);
      localStorage.setItem('user', JSON.stringify(exUsers));
      
      // this.userService.addUser(user).subscribe(
      //   (addedUser) => {
      //     console.log('Объект успешно добавлен:', addedUser);
      //     // Очистите новый объект после успешного добавления
          
      //   },
      //   (error) => {
      //     console.error('Произошла ошибка при добавлении объекта:', error);
      //   }
      // )

      
      this.userName = "";
      this.userEmail = "";
      this.userPassword = "";
      this.userSex = "";
      this.userBirthday = "";

      // this.addUserToDb(user);
    }
  }
  // addUserToDb(user: any){
  //   this.userService.addUser(user).subscribe(
  //     (addedUser) => {
  //       console.log('Объект успешно добавлен:', addedUser);
  //       // Очистите новый объект после успешного добавления
        
  //     },
  //     (error) => {
  //       console.error('Произошла ошибка при добавлении объекта:', error);
  //     }
  //   )
  // }
}
