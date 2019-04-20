import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { UpcomingCricketService } from '~/data/list-upcoming.services';

@Component({
  selector: 'Oldmatches',
  moduleId: module.id,
  templateUrl: './old-matches.component.html',
  styleUrls: ['./old-matches.component.css']
})
export class OldMatchesComponent implements OnInit {
  items: any;
  processing: boolean = true;
	constructor(private page:Page, private _router: RouterExtensions,private get_data_services: UpcomingCricketService, ) { 
    
  }
	
  ngOnInit(): void {
    this.get_data_services.getOldCricketList().subscribe(res => {
			this.processing = false;
			this.items = res.data;
			console.log('hai now playing',this.items)
		});
  }
//   public onItemTap(itemId) {
//     console.log(`Tapped on ${itemId}`);
//     this._router.navigate([
//       'matchDetails/' + itemId,
//       {
//         animated: true,
//         transition: {
//           name: 'slideTop',
//           duration: 380,
//           curve: 'easeIn'
//         }
//       }
// 		]);
// }
  goBack(): void {
    this._router.back();
}
}
