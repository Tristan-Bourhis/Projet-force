import { Injectable } from '@angular/core';
import {Programme} from '../models/programme.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class ProgrammeService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    getProgrammes(): Observable<Programme[]> {
        return this.http.get<Programme[]>(`${this.url}/programmes`).pipe(timeout(10000));
    }

    addProgramme(program: Programme): Observable<Programme> {
        return this.http.post<any>(`${this.url}/programmes`, program).pipe(timeout(10000));
    }

    deleteProgramme(id: number): Observable<any> {
        return this.http.delete(`${this.url}/programmes/${id}`).pipe(timeout(10000));
    }

}
