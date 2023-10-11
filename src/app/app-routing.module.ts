import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  {path: 'registration-form', component: RegistrationFormComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-page', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
}
