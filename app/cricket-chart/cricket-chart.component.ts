import { Component, OnInit } from '@angular/core';
import { UpcomingCricketService } from '~/data/list-upcoming.services';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'CricketChart',
  moduleId: module.id,
  templateUrl: './cricket-chart.component.html',
  styleUrls: ['./cricket-chart.component.css']
})
export class CricketChartComponent implements OnInit {
  items: any;
	processing: boolean = true;
	constructor(private get_data_services: UpcomingCricketService,private routerExtensions: RouterExtensions ) { }
	
	ngOnInit(): void {
		this.get_data_services.getList().subscribe(res => {
			this.items = res.data;
			this.processing = false;
			console.log('hai now playing', this.items)
    });
    
  }

  goBack(): void {
    this.routerExtensions.back();
}
}

