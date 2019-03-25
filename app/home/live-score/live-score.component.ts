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
    this.itemId = 1;
    this.item = this.items.filter(item => item.id == this.itemId)[0];
    console.log('hai second component', this.item);
  }

  ngOnInit(): void {}

}
