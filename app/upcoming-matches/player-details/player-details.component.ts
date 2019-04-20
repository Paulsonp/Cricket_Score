import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { switchMap, map } from 'rxjs/operators';
import { API_KEY, API_URL } from '~/data/config';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UpcomingCricketService } from '~/data/list-upcoming.services';
@Component({
  selector: 'PlayerDetails',
  moduleId: module.id,
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  itemId: number;
  processing: any;
  player_data: any;

  constructor(
    private pageRoute: PageRoute,
    private routerExtensions: RouterExtensions,
    private score_service: UpcomingCricketService
  ) {
  }

  ngOnInit(): void {
    this.processing = true;
    this.pageRoute.activatedRoute.pipe(switchMap(activatedRoute => activatedRoute.params)).forEach(params => {
      this.itemId = +params['id'];
      this.score_service.getCricketPlayerDetails(this.itemId).subscribe(res => {
        this.processing = false;
        this.player_data = res;
        
        console.log('hai i am New Score team_data' ,this.player_data );
      });
    });
  }
  goBack(): void {
    this.routerExtensions.back();
}
}
