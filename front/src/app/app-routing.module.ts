import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {MaxComponent} from './max/max.component';
import {DotsComponent} from './dots/dots.component';
import {RpeComponent} from './rpe/rpe.component';
import {WarmupComponent} from './warmup/warmup.component';
import {OutilsComponent} from './outils/outils.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'max', component: MaxComponent },
  { path: 'dots', component: DotsComponent },
  { path: 'rpe', component: RpeComponent },
  { path: 'warmup', component: WarmupComponent },
  { path: 'outils', component: OutilsComponent },
  { path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
