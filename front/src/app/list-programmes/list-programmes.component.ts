import { Component, OnInit } from '@angular/core';
import {Programme} from '../models/programme.model';
import {ProgrammeService} from '../services/programme.service';
import {SeanceService} from '../services/seance.service';
import {Seance} from '../models/seance.model';
import {Exercice} from '../models/exercice.model';
import {ExerciceService} from '../services/exercice.service';

@Component({
    selector: 'app-list-programs',
    templateUrl: './list-programmes.component.html',
    styleUrls: ['./list-programmes.component.css']
})
export class ListProgrammesComponent implements OnInit {

    programmes: Programme[];
    seances: Seance[];
    exercices: Exercice[];
    seances2: Seance[];

    constructor(private programmeService: ProgrammeService, private seanceService: SeanceService, private eService: ExerciceService) { }

    ngOnInit() {
        this.programmeService.getProgrammes().subscribe(programmes => this.programmes = programmes);
        this.seanceService.getSeances().subscribe(seances => this.seances=seances);
        this.eService.getExercices().subscribe(exercices => this.exercices=exercices);
    }

    deleteProgram(id: number) {
        this.programmeService.deleteProgramme(id).subscribe(succes => {
            this.programmes = this.programmes.filter(programme => programme.idProgramme !== id)
        });
    }

    deleteSeance(id: number) {
        this.seanceService.deleteSeance(id).subscribe(succes => {
            this.seances = this.seances.filter(seance => seance.idSeance !== id)
        });
    }

    deleteExercice(id: number) {
        this.eService.deleteExercice(id).subscribe(succes => {
            this.exercices = this.exercices.filter(exercice => exercice.idExercice !== id)
        });
    }
}
