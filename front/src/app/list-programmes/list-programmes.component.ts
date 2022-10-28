import { Component, OnInit } from '@angular/core';
import {Programme} from '../models/programme.model';
import {ProgrammeService} from '../services/programme.service';
import {SeanceService} from '../services/seance.service';
import {Seance} from '../models/seance.model';
import {Exercice} from '../models/exercice.model';
import {ExerciceService} from '../services/exercice.service';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list-programs',
    templateUrl: './list-programmes.component.html',
    styleUrls: ['./list-programmes.component.css']
})
export class ListProgrammesComponent implements OnInit {

    programmes: Programme[];
    seances: Seance[];
    exercices: Exercice[];
    connectedUser: User;
    compteur: number;

    constructor(
        private programmeService: ProgrammeService,
        private seanceService: SeanceService,
        private userService: UserService,
        private exerciceService: ExerciceService,
        private router: Router) { }

    ngOnInit() {
        this.programmeService.getProgrammes().subscribe(programmes => this.programmes = programmes);
        this.seanceService.getSeances().subscribe(seances => this.seances=seances);
        this.exerciceService.getExercices().subscribe(exercices => this.exercices=exercices);
        this.connectedUser = this.userService.getUserConnected();
        this.compteur=0;
    }

    increment(): number {
        this.compteur = (this.compteur+1)%8;
        console.log(this.compteur)
        return this.compteur;
    }

    changeProgramme() {
        this.router.navigateByUrl('/select-programs')
    }
}
