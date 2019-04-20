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
		this.get_data_services.getOldList().subscribe(res => {
			this.processing = false;
			this.items = res.matches;
			console.log('hai now playing',this.items)
		});
		// this.item();
	}
	// get item(){
  //   return  this.items.find(item => item.date == this.today);
  // }

	
	showItem(itemId) {
    console.log(`Tapped on ${itemId}`);
    this.routerExtensions.navigate([
      'matchDetails/' + itemId,
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