import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {Programme} from '../models/programme.model';
import {ProgrammeService} from '../services/programme.service';
import {NgForm} from '@angular/forms';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';

@Component({
    selector: 'app-select-programs',
    templateUrl: './select-programs.component.html',
    styleUrls: ['./select-programs.component.css']
})
export class SelectProgramsComponent implements OnInit {

    connectedUser: User;
    programmes: Programme[];
    email: string;

    constructor(
        private userService: UserService,
        private programmeService: ProgrammeService,
        private router: Router) { }

    ngOnInit(): void {
        this.connectedUser = this.userService.getUserConnected();
        this.programmeService.getProgrammes().subscribe(programmes => this.programmes = programmes);
    }

    onSubmit(ngForm: NgForm) {
        const user = defaultsDeep({
            id: this.connectedUser.id,
            firstName: this.connectedUser.firstName,
            lastName: this.connectedUser.lastName,
            email: this.connectedUser.email,
            age: this.connectedUser.age,
            taille: this.connectedUser.taille,
            poids: this.connectedUser.poids,
            programme: this.programmes[ngForm.form.value.prog-1]
        });

        // tslint:disable-next-line:no-shadowed-variable
        this.userService.addUser(user).subscribe(user => console.log(user));

        this.email = this.connectedUser.email;
        this.userService.logout();
        this.userService.getUserByEmail(this.email).subscribe(res =>{
            if(res!=null){
                this.userService.user=res
            }
        })
        this.email = this.connectedUser.email;
        this.userService.logout();
        this.userService.getUserByEmail(this.email).subscribe(res =>{
            if(res!=null){
                this.userService.user=res
            }
        })
        this.userService.logout();
        this.userService.getUserByEmail(this.email).subscribe(res =>{
            if(res!=null){
                this.userService.user=res
                this.router.navigateByUrl('/home')
            }
        })
    }
}
