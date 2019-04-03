import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
  _item: any;
  items: Array<LiveData>;
  @Input() selected;

  constructor(private page: Page, private dataService: LiveService) {
    this.items = this.dataService.getLiveData();
    this.page.actionBarHidden = true;
   
  }
  get item(){
    return  this.items.find(item => item.id == this.selected);
  }
  ngOnInit(): void {}

}
