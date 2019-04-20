import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URL, API_KEY } from './config';


@Injectable()
export class UpcomingCricketService {
    upcomingCricketList = API_URL + '/matchCalendar?apikey=' + API_KEY;
    cricketList = API_URL + '/matches?apikey=' + API_KEY;
    oldCricketList = API_URL + '/cricket?apikey=' + API_KEY;

    constructor(private http: Http) { }
    getList(): Observable<any> {
        return this.http.get(this.upcomingCricketList).pipe(map(res => res.json(), error => error.json()));
    }
    getOldList(): Observable<any> {
        return this.http.get(this.cricketList).pipe(map(res => res.json(), error => error.json()));
    }
    getCricketDetails(id): Observable<any> {
        let ID = id;
        let cricketDetails = API_URL + '/fantasySummary?apikey=' + API_KEY + '&unique_id=' + ID;
        return this.http.get(cricketDetails).pipe(map(res => res.json(), error => error.json()));
      }
      getOldCricketList(): Observable<any> {
        return this.http.get(this.oldCricketList).pipe(map(res => res.json(), error => error.json()));
    }
    getCricketPlayer(id): Observable<any> {
        let ID = id;
        let cricketPlayer = API_URL + '/fantasySquad?apikey=' + API_KEY + '&unique_id=' + ID;
        return this.http.get(cricketPlayer).pipe(map(res => res.json(), error => error.json()));
      }
      getCricketPlayerDetails(id): Observable<any> {
        let ID = id;
        let cricketPlayerDetails = API_URL + '/playerStats?apikey=' + API_KEY + '&pid=' + ID;
        return this.http.get(cricketPlayerDetails).pipe(map(res => res.json(), error => error.json()));
      }
}
