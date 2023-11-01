import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, OnInit } from '@angular/core';
import { response } from 'express';
import { get } from 'mongoose';
import { UserService } from 'src/app/user.service';

const User = require('./../../models/userModel');
const users = User.find({});
  
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  })

export class UserListComponent implements OnInit{
  registeredUsers: any[] = [];
  regUsers: any[] = [];
  
  constructor(private http:HttpClient){}


  ngOnInit(){
    this.http.get('/users').subscribe((data: any) => {
      this.regUsers = data; // Сохраняем полученные данные в свойство users
      
      });

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
