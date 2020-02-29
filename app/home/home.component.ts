import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from "nativescript-videoplayer";

import { Item } from "../data/data.model";
import { DataService } from "../data/data";
registerElement("VideoPlayer", () => Video);

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  itemId: number;
  _item: Item;
  items: Array<Item>;
  // @ViewChild("videoModal") videoMdl: ElementRef;
  @ViewChild("videoModal", { static: true }) videoMdl: ElementRef;
  selected = 0;
  spinner: boolean = false;

  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page,
    private dataService: DataService
  ) {
    this.page.actionBarHidden = true;
    this.spinner = true;
    this.items = this.dataService.getItems();
    // this.itemId = 1;
    // this.item = this.items.filter(item => item.id == this.itemId)[0];
  }

  ngOnInit(): void {
    this.videoMdl.nativeElement.visibility = "collapsed";
  }
  get item() {
    this.spinner = false;
    return this.items.find(item => item.id == this.selected);
  }
  openVideoModal() {
    this.videoMdl.nativeElement.visibility = "visible";
    // this.videoMdl.nativeElement.animate({
    //     opacity: 1,
    //     duration: 200
    // });
  }

  closeVideoModal() {
    // vPlayer.pause();
    // this.videoMdl.nativeElement.animate({
    //     opacity: 0,
    //     duration: 200
    // }).then(
    //     () => {
    this.videoMdl.nativeElement.visibility = "collapsed";
    // });
  }
  onClick(i) {
    this.selected = i;
    console.log("image click", i);
  }
  goBack(): void {
    this.routerExtensions.back();
  }
}
