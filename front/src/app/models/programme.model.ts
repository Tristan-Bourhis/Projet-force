import { defaultsDeep } from 'lodash';

export class Programme {
    idProgramme: number;
    nom: string;

    constructor(programme?: Partial<Programme>) {
        defaultsDeep(this, programme);
    }
}