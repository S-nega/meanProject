import { Component } from '@angular/core';
import { UserList } from 'src/app/models/userList';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  currentUsers: any[] = [];
  currentUser: {} = {};
  ngOnInit(){
    console.log("userPage")
    const curUser = localStorage.getItem('CurUser');
    console.log(curUser);
    if (curUser){
      this.currentUser = JSON.parse(curUser);
      console.log(this.currentUser);
    }
  }
}
// console.log(curUser);