import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URL, API_KEY } from './config';


@Injectable()
export class UpcomingCricketService {
    upcomingCricketList = API_URL + '/matchCalendar?apikey=' + API_KEY;
    oldCricketList = API_URL + '/cricket?apikey=' + API_KEY;
    // https://cricapi.com/api/matchCalendar?apikey=5VLOXMYkQYcfgmEjHRkft17q6d72

    constructor(private http: Http) { }
    getList(): Observable<any> {
        return this.http.get(this.upcomingCricketList).pipe(map(res => res.json(), error => error.json()));
    }
    getOldList(): Observable<any> {
        return this.http.get(this.oldCricketList).pipe(map(res => res.json(), error => error.json()));
    }
}