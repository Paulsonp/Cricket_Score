import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'Dashboard',
  moduleId: module.id,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any;
	processing: boolean = true;
	constructor(private page:Page, private _router: RouterExtensions ) { 
    this.page.actionBarHidden = true;
  }
	
	ngOnInit(): void {}
  goNewMatchList(): void {
    this._router.navigate(['/upcoming'], {
      transition: { name: 'slideLeft' }
  });
}
goMatchList(): void {
  this._router.navigate(['/cricketCalender'], {
    transition: { name: 'slideLeft' }
  });
  }
}
