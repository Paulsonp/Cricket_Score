import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { UpcomingCricketService } from "~/data/list-upcoming.services";

@Component({
	selector: "UpcomingMatches",
	moduleId: module.id,
	templateUrl: "./upcoming-matches.component.html",
	styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {
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