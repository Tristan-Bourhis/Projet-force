import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';
import {Programme} from '../models/programme.model';
import {ProgrammeService} from '../services/programme.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  programmes: Programme[];

  constructor(private userService: UserService,private programmeService: ProgrammeService, private router: Router) { }

  ngOnInit() {
    this.programmeService.getProgrammes().subscribe(programmes => this.programmes = programmes);
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const user = defaultsDeep({
      id: null,
      firstName: ngForm.form.value.firstName,
      lastName: ngForm.form.value.lastName,
      email: ngForm.form.value.email,
      age: ngForm.form.value.age,
      taille: ngForm.form.value.taille,
      poids: ngForm.form.value.poids,
      programme: this.programmes[0]
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.userService.addUser(user).subscribe(user => console.log(user));

    this.router.navigateByUrl('/login');
  }
}
