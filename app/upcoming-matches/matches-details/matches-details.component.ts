import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { switchMap, map } from 'rxjs/operators';
import { API_KEY, API_URL } from '~/data/config';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UpcomingCricketService } from '~/data/list-upcoming.services';
@Component({
  selector: 'MatchesDetails',
  moduleId: module.id,
  templateUrl: './matches-details.component.html',
  styleUrls: ['./matches-details.component.css']
})
export class MatchesDetailsComponent implements OnInit {
  itemId: number;
  item: any;
  processing: any;
  fielding_data: any;
  bowling_data: any;
  batting_data: any;
  team_data: any;
  man_of_the_match: any;
  all_data: any;

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
      this.score_service.getCricketDetails(this.itemId).subscribe(res => {
        this.processing = false;
        this.fielding_data = res.data.fielding;
        this.bowling_data = res.data.bowling;
        this.batting_data = res.data.batting;
        this.man_of_the_match = res.data['man-of-the-match'];
        this.all_data= res.data;
        // res.data.bowling.forEach(innings=>{
        //   this.bowling_data = innings;
        // })
      });
      this.score_service.getCricketPlayer(this.itemId).subscribe(res => {
        this.team_data = res.squad;
        // console.log('hai i am New Score team_data' ,this.team_data );
      })
    });
  }
  showItem(itemId) {
    console.log(`Tapped on ${itemId}`);
    this.routerExtensions.navigate([
      'playerDetails/' + itemId,
      {
        animated: true,
        transition: {
          name: 'slideTop',
          duration: 380,
          curve: 'easeIn'
        }
      }
		]);
  }

  goBack(): void {
    this.routerExtensions.back();
}
}
