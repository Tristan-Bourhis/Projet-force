import { Component, OnInit } from '@angular/core';
import {Programme} from '../models/programme.model';
import {ProgrammeService} from '../services/programme.service';
import {SeanceService} from '../services/seance.service';
import {Seance} from '../models/seance.model';
import {Exercice} from '../models/exercice.model';
import {ExerciceService} from '../services/exercice.service';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

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

    constructor(private pSer: ProgrammeService, private sSer: SeanceService, private uSer: UserService, private eSer: ExerciceService) { }

    ngOnInit() {
        this.pSer.getProgrammes().subscribe(programmes => this.programmes = programmes);
        this.sSer.getSeances().subscribe(seances => this.seances=seances);
        this.eSer.getExercices().subscribe(exercices => this.exercices=exercices);
        this.connectedUser = this.uSer.getUserConnected();
    }
}
