import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, OnInit } from '@angular/core';
import { response } from 'express';
import { get } from 'mongoose';
import { UserService } from 'src/app/user.service';
// import {User} from '../form-task/server.js';

const User = require('./../../models/userModel');
const users = User.find({});
  
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  })

export class UserListComponent{
  registeredUsers: any[] = [];
  regUsers: any[] = [];
  
  // User = require('./models/userModel');


  ngOnInit(){
   // console.log("userlist");
   // console.log(users);

    // const storedUsers = app.get('/users', (users,)) 

    const storedUsers = localStorage.getItem('user');
    
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers); 
    }


    // this.http.get<any>('http://localhost:3000/users'.subscribe(response => {
      // this.registeredUsers=JSON.stringify(response)
      // console.log(this.registeredUsers);
    // }))
    // HttpClient.get()
    // UserService.get('/users', ( Snega, snega));

    // this.registeredUsers = User.find({});
    // this.registeredUsers = db.getCollection('students').find({});
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
