import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListProgrammesComponent } from './list-programmes/list-programmes.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { MaxComponent } from './max/max.component';
import { DotsComponent } from './dots/dots.component';
import { RpeComponent } from './rpe/rpe.component';
import { WarmupComponent } from './warmup/warmup.component';
import { OutilsComponent } from './outils/outils.component';
import {UpdateUserComponent} from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    LoginComponent,
    HomeComponent,
    MaxComponent,
    DotsComponent,
    RpeComponent,
    WarmupComponent,
    OutilsComponent,
    ListProgrammesComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   { path: '', pathMatch: 'full', redirectTo: 'home' },
    //   { path: 'home', component: HomeComponent },
    // ]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
