import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'Landing-page',
  moduleId: module.id,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  spinner: boolean= false;

  constructor(private readonly page: Page,private readonly _router: RouterExtensions) { 
    this.page.actionBarHidden = true;
    this.spinner= false;
  }

  ngOnInit() {
  }
  goPage(): void {
    this.spinner= true;
    this._router.navigate(['/dashboard'], {
      transition: { name: 'slideLeft' }
  });
  this.spinner= false;
}
}
