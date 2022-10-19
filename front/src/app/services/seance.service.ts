import {Injectable, Optional} from '@angular/core';
import {Seance} from '../models/seance.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';
import {User} from '../models/user.model';
import {Programme} from '../models/programme.model';

@Injectable({
    providedIn: 'root'
})
export class SeanceService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    getSeances(): Observable<Seance[]> {
        return this.http.get<Seance[]>(`${this.url}/seances`).pipe(timeout(10000));
    }

    addSeance(seance: Seance): Observable<Seance> {
        return this.http.post<any>(`${this.url}/seances`, seance).pipe(timeout(10000));
    }

    deleteSeance(id: number): Observable<any> {
        return this.http.delete(`${this.url}/seances/${id}`).pipe(timeout(10000));
    }
}
