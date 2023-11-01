import { Component, Input, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})


export class RegistrationFormComponent implements OnInit{

  userName:string = '';
  userEmail:string = '';
  userPassword:string = '';
  userSex:string = '';
  userBirthday:string = '';

  ngOnInit(): void {
    console.log("registration")
  }

  addUser(){
    if (this.userName.length >= 3 && 
        this.userPassword.length >= 6 &&
        this.userEmail.indexOf('@') < this.userEmail.lastIndexOf('.')
        //  &&
        // this.userSex &&
        // this.userBirthday
        )
    {
      var user =
        {
          userName: this.userName,
          userEmail: this.userEmail,
          userPassword: this.userPassword,
          // userSex: this.userSex,
          // userBirthday: this.userBirthday,
        }

      const exUsersJson = localStorage.getItem('user');
      const exUsers = exUsersJson ? JSON.parse(exUsersJson) : [];
      exUsers.push(user);
      localStorage.setItem('user', JSON.stringify(exUsers));
      
      // app.
      // this.http.get('https://api.example.com/data').subscribe(response => {

      // });

      this.userName = "";
      this.userEmail = "";
      this.userPassword = "";
      // this.userSex = "";
      // this.userBirthday = "";

    }
  }
}
