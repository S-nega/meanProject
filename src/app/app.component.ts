import { Component } from '@angular/core';
import { LocalService } from './local.service';
import { UserList } from 'src/app/models/userList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-task';

  ngOnInit(): void {
    
  }
}
