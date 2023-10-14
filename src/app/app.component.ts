import { Component } from '@angular/core';
import { LocalService } from './local.service';
import { UserList } from 'src/app/models/userList';
// import {CommonSevice} from ''

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-task';
  // constructor(private common2: CommonService) {
  // }
  ngOnInit(): void {
    // var express = require('express')
    // var path = require("path")
    // var bodyParser = require('body-parser');
    // var mongo = require("mongoose");

    // var db = mongo.connect("mongodb://localhost27017/AngularCRUD", function(err, response){
    //     if(err){console.log(err); }
    //     else{console.log('Connect to ' + db, ' + ', response); }
    // });
  }
  
}
