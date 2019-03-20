import { Injectable } from '@angular/core';

import { LiveData } from '../data/live.model';

@Injectable()
export class LiveService {
  getLiveData(): Array<LiveData> {
    return [
      {
        id: 1,
        name: 'INDIA vs NEW ZEALAND',
        category: '3 T20 INTERNATIONAL SERIES, 2019',
        place: 'EDEN PARK, AUCKLAND',
        time: '2ND T20I - 11:30 IST FRI',
        categoryTag: '#008394',
        team: 'ind',
        team_flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/India-flag-a4.jpg',
        team_run: 210,
        team_wic: 6,
        team_over: 50,
        oppo_team: 'nz',
        oppo_team_flag: 'https://static2.stuff.co.nz/1412653711/351/10589351.jpg',
        oppo_team_run: 190,
        oppo_team_wic: 10,
        oppo_team_over: 48.5,
        price: '300.00',
        likes: 987,
        isLike: false,
        isFavorite: true,
        comments: 13,
        rating: '4.5',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
      },
      {
        id: 2,
        name: 'INDIA vs SRILANKA',
        category: '3 T20 INTERNATIONAL SERIES, 2019',
        place: 'EDEN PARK, AUCKLAND',
        time: '2ND T20I - 11:30 IST FRI',
        categoryTag: '#008394',
        team: 'ind',
        team_flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/India-flag-a4.jpg',
        team_run: 210,
        team_wic: 6,
        team_over: 50,
        oppo_team: 'nz',
        oppo_team_flag: 'https://static2.stuff.co.nz/1412653711/351/10589351.jpg',
        oppo_team_run: 190,
        oppo_team_wic: 10,
        oppo_team_over: 48.5,
        price: '300.00',
        likes: 987,
        isLike: false,
        isFavorite: true,
        comments: 13,
        rating: '4.5',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
      },
      {
        id: 3,
        name: 'INDIA vs AUSTRALIA',
        category: '3 T20 INTERNATIONAL SERIES, 2019',
        place: 'EDEN PARK, AUCKLAND',
        time: '2ND T20I - 11:30 IST FRI',
        categoryTag: '#008394',
        team: 'ind',
        team_flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/India-flag-a4.jpg',
        team_run: 210,
        team_wic: 6,
        team_over: 50,
        oppo_team: 'nz',
        oppo_team_flag: 'https://static2.stuff.co.nz/1412653711/351/10589351.jpg',
        oppo_team_run: 190,
        oppo_team_wic: 10,
        oppo_team_over: 48.5,
        price: '300.00',
        likes: 987,
        isLike: false,
        isFavorite: true,
        comments: 13,
        rating: '4.5',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
      }
    ];
  }
}
