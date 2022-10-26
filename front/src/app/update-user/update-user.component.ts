import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

    connectedUser: User;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.connectedUser = this.userService.getUserConnected();
    }

    onSubmit(ngForm: NgForm) {
        console.log(ngForm);
        const user = defaultsDeep({
            id: this.connectedUser.id,
            firstName: ngForm.form.value.firstName,
            lastName: ngForm.form.value.lastName,
            email: ngForm.form.value.email,
            age: ngForm.form.value.age,
            taille: ngForm.form.value.taille,
            poids: ngForm.form.value.poids,
            programme: this.connectedUser.programme
        });

        // tslint:disable-next-line:no-shadowed-variable
        this.userService.addUser(user).subscribe(user => console.log(user));

        this.router.navigateByUrl('/list-users');
    }
}
