import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UserPageComponent } from './components/user-page/user-page.component';
// import {HttpClientModule} from '@angular/common/http';
// import { CommonService } from 'common';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    UserListComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // CommonModule
    StorageServiceModule,
  ],
  providers: [
    // LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
