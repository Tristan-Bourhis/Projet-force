import { Injectable } from '@angular/core';
import {Exercice} from '../models/exercice.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class ExerciceService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    getExercices(): Observable<Exercice[]> {
        return this.http.get<Exercice[]>(`${this.url}/exercices`).pipe(timeout(10000));
    }

    addExercice(exercice: Exercice): Observable<Exercice> {
        return this.http.post<any>(`${this.url}/exercices`, exercice).pipe(timeout(10000));
    }

    deleteExercice(id: number): Observable<any> {
        return this.http.delete(`${this.url}/exercices/${id}`).pipe(timeout(10000));
    }

}
