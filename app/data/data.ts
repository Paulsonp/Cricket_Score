import { Injectable } from "@angular/core";

import { Item } from "../data/item.model";
import { Category } from "../data/category.model";

@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            cover: "https://i.ytimg.com/vi/vX-P-EFX7eg/hqdefault.jpg",
            images: [
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c129589/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158148/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c165184/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/620x358/i1/c122118/ct-2017-preview-india-vs-sout.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158111/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c126813/cms-img.jpg"
            ],
            tagline: " 2019 Asia Cup One-Day International (ODI)"}];
    }

    getCategories(): Array<Category> {
        return [
            {
                cover: "~/assets/images/food/burger640.jpg",
                category: "BURGER",
                count: "13",
            },
            {
                cover: "~/assets/images/food/pancake640.jpg",
                category: "PANCAKE",
                count: "5",
            },
            {
                cover: "~/assets/images/food/cake640.jpg",
                category: "CAKE",
                count: "9",
            },
            {
                cover: "~/assets/images/food/beer640.jpg",
                category: "BEER",
                count: "7",
            }
        ];
    }
}