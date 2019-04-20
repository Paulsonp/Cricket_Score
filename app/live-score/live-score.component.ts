import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { UpcomingCricketService } from '~/data/list-upcoming.services';

@Component({
  selector: 'LiveScore',
  moduleId: module.id,
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScorePageComponent implements OnInit {
  items: any;
	processing: boolean = true;
  data: any;
	constructor(private get_data_services: UpcomingCricketService,private routerExtensions: RouterExtensions ) { }
	
	ngOnInit(): void {
		this.get_data_services.getOldList().subscribe(res => {
			this.items = res.matches;
      this.processing = false;
      // this.data =  this.get_data_services.getOldList().filter(x => this.items.matchStarted == true);
			console.log('hai now playing', this.items)
    });
    
  }

  goBack(): void {
    this.routerExtensions.back();
}
}

