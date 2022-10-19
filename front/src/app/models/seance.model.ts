import { defaultsDeep } from 'lodash';
import {Programme} from './programme.model';

export class Seance {
    idSeance: number;
    programme: Programme;

    constructor(seance?: Partial<Seance>) {
        defaultsDeep(this, seance);
    }
}