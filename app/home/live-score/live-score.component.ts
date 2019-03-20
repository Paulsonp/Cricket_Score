import { Component, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Page } from 'ui/page';
import { LiveData } from '../../data/live.model';
import { LiveService } from '../../data/live-data';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'LiveScore',
  moduleId: module.id,
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {
  itemId: number;
  item: any;
  items: Array<LiveData>;

  constructor(private page: Page, private dataService: LiveService) {
    this.items = this.dataService.getLiveData();
    this.page.actionBarHidden = true;
    this.item = this.items;
    // this.itemId = 1;
    // this.item = this.items.filter(item => item.id == this.itemId)[0];
    // console.log('hai second component', this.item);
  }

  ngOnInit(): void {}

  // toggleLike() {
  //   this.item.isLike = !this.item.isLike;
  //   if (this.item.isLike) {
  //     this.item.likes += 1;
  //   } else {
  //     this.item.likes -= 1;
  //   }
  // }

  toggleHeart(item) {
    item.isFavorite = !item.isFavorite;
  }

  // categoryIcon() {
  //   switch (this.item.categoryTag) {
  //     case 'Burger':
  //       return String.fromCharCode(0xf0f5); //"fa-cutlery";
  //       break;
  //     case 'Beer':
  //       return String.fromCharCode(0xf0fc); //"fa-beer";
  //       break;
  //     case 'Pancake':
  //       return String.fromCharCode(0xf0f4); //"fa-coffee";
  //       break;
  //     case 'Cake':
  //       return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
  //       break;
  //     default:
  //       return String.fromCharCode(0xf06d); //"fa-fire";
  //       break;
  //   }
  // }
}
