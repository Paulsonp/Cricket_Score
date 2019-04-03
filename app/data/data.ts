import { Injectable } from "@angular/core";

import { Item } from "./data.model";

@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 0,
            cover: "https://cdn7.newsnation.in/images/2018/08/29/icccricketworldcup19-3016739_6.jpg",
            images: [
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c129589/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158148/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c165184/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/620x358/i1/c122118/ct-2017-preview-india-vs-sout.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158111/cms-img.jpg",
                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c126813/cms-img.jpg"
            ],
            tagline: " 2019 Asia Cup One-Day International (ODI)"},
            {
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
                tagline: "2019 ICC Cricket World Cup in England and Wales"},
                {
                    id: 2,
                    cover: "https://icc-static-files.s3.amazonaws.com/ICC/photo/2018/01/29/6aaa908e-864f-43c0-b385-ad84d2f0b493/WT20-TA.jpg",
                    images: [
                        "https://www.cricbuzz.com/a/img/v1/650x0/i1/c129589/cms-img.jpg",
                        "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158148/cms-img.jpg",
                        "https://www.cricbuzz.com/a/img/v1/650x0/i1/c165184/cms-img.jpg",
                        "https://www.cricbuzz.com/a/img/v1/620x358/i1/c122118/ct-2017-preview-india-vs-sout.jpg",
                        "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158111/cms-img.jpg",
                        "https://www.cricbuzz.com/a/img/v1/650x0/i1/c126813/cms-img.jpg"
                    ],
                    tagline: "ICC T20 World Cup 2020"},
                    {
                        id: 3,
                        cover: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/CWC-Banner-4.png",
                        images: [
                            "https://www.cricbuzz.com/a/img/v1/650x0/i1/c129589/cms-img.jpg",
                            "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158148/cms-img.jpg",
                            "https://www.cricbuzz.com/a/img/v1/650x0/i1/c165184/cms-img.jpg",
                            "https://www.cricbuzz.com/a/img/v1/620x358/i1/c122118/ct-2017-preview-india-vs-sout.jpg",
                            "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158111/cms-img.jpg",
                            "https://www.cricbuzz.com/a/img/v1/650x0/i1/c126813/cms-img.jpg"
                        ],
                        tagline: "2019 ICC T20 World Cup"},
                        {
                            id: 4,
                            cover: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/CWC-Banner-4.png",
                            images: [
                                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c129589/cms-img.jpg",
                                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158148/cms-img.jpg",
                                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c165184/cms-img.jpg",
                                "https://www.cricbuzz.com/a/img/v1/620x358/i1/c122118/ct-2017-preview-india-vs-sout.jpg",
                                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158111/cms-img.jpg",
                                "https://www.cricbuzz.com/a/img/v1/650x0/i1/c126813/cms-img.jpg"
                            ],
                            tagline: "2019 ICC T20 World Cup"},
                            {
                                id: 5,
                                cover: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/CWC-Banner-4.png",
                                images: [
                                    "https://www.cricbuzz.com/a/img/v1/650x0/i1/c129589/cms-img.jpg",
                                    "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158148/cms-img.jpg",
                                    "https://www.cricbuzz.com/a/img/v1/650x0/i1/c165184/cms-img.jpg",
                                    "https://www.cricbuzz.com/a/img/v1/620x358/i1/c122118/ct-2017-preview-india-vs-sout.jpg",
                                    "https://www.cricbuzz.com/a/img/v1/650x0/i1/c158111/cms-img.jpg",
                                    "https://www.cricbuzz.com/a/img/v1/650x0/i1/c126813/cms-img.jpg"
                                ],
                                tagline: "2019 ICC T20 World Cup"}
        ]
    }

}