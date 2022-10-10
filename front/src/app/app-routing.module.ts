import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
