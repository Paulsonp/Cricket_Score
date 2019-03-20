import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";

import { Item } from "../data/item.model";
import { DataService } from "../data/data";
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from "nativescript-videoplayer";
registerElement("VideoPlayer", () => Video);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    itemId: number;
    item: Item;
    items: Array<Item>;
    @ViewChild('videoModal') videoMdl: ElementRef;

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private dataService: DataService) {

        this.items = this.dataService.getItems();
        this.page.actionBarHidden = true;


        this.itemId = 1;
        this.item = this.items.filter(item => item.id == this.itemId)[0];
        console.log("hai paul", this.item)
    }

    ngOnInit(): void {
        this.videoMdl.nativeElement.visibility = 'collapsed';
    }
    openVideoModal() {
        this.videoMdl.nativeElement.visibility = 'visible';
        this.videoMdl.nativeElement.animate({
            //scale: { x: 1, y: 1 },
            opacity: 1,
            duration: 200
        });
    }

    closeVideoModal(vPlayer: Video) {
        vPlayer.pause();
        this.videoMdl.nativeElement.animate({
            //scale: { x: 0, y: 0 },
            opacity: 0,
            duration: 200
        }).then(
            () => {
                this.videoMdl.nativeElement.visibility = 'collapsed';
            });
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }

    // categoryIcon() {
    //     switch (this.item.categoryTag) {
    //         case "Burger":
    //             return String.fromCharCode(0xf0f5); //"fa-cutlery";
    //             break;
    //         case "Beer":
    //             return String.fromCharCode(0xf0fc); //"fa-beer";
    //             break;
    //         case "Pancake":
    //             return String.fromCharCode(0xf0f4); //"fa-coffee";
    //             break;
    //         case "Cake":
    //             return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
    //             break;
    //         default:
    //             return String.fromCharCode(0xf06d); //"fa-fire";
    //             break;
    //     }
    // }

    onCloseTap(): void {
        this.routerExtensions.back();
    }

}
