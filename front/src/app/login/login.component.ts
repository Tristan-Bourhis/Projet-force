import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm){
    const email = ngForm.form.value.email
    this.userService.getUserByEmail(email).subscribe(res =>{
      if(res!=null){
        this.userService.user=res
        this.router.navigateByUrl('/home')
      }
    })
  }

}
