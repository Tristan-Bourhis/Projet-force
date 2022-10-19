import { defaultsDeep } from 'lodash';
import {Seance} from './seance.model';

export class Exercice {
    idExercice: number;
    nom: string;
    serie: number;
    repetition: number;
    pourcentageRm: number;
    commentaire: string;
    resultat: number;
    seance: Seance;


    constructor(exercice?: Partial<Exercice>) {
        defaultsDeep(this, exercice);
    }
}