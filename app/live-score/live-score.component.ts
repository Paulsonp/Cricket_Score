import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { UpcomingCricketService } from "~/data/list-upcoming.services";
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import "rxjs/add/operator/takeWhile";

@Component({
  selector: "LiveScore",
  moduleId: module.id,
  templateUrl: "./live-score.component.html",
  styleUrls: ["./live-score.component.css"]
})
export class LiveScorePageComponent implements OnInit {
  private alive: boolean;
  items: any;
  processing: boolean = true;
  data: any;
  filteredMatches = [];
  teamOne: any;
  teamTwo: any;
  venue: any;
  score: any;
  teamRun: any;
  teamRunArray = [];
  seriousType: any;
  batsman: any;
  players: any;
  batsManName: any;
  bowler: any;
  bowlerName: any;
  time: Date;
  momAllData: any;
  oppoTeamRun: any;
  bowlingteam: any;
  battingTeam: any;
  inprogressAllData: any;
  newMatches = [];

  constructor(private get_data_services: UpcomingCricketService, private routerExtensions: RouterExtensions) {
    this.alive = true;
  }

  ngOnInit(): void {
    this.get_data_services.getLiveScore().subscribe(res => {
      this.items = res.matches;
      this.inprogressData();
      this.processing = false;
    });

    IntervalObservable.create(5000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.get_data_services.getLiveScore().subscribe(res => {
          this.items = res.matches;
          this.inprogressData();
          // console.log("rrr");
        });
      });
  }
  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }
  goBack(): void {
    this.routerExtensions.back();
  }
  getFirstLetters(name) {
    return name
      .split(" ")
      .map(w => w[0])
      .join("")
      .toUpperCase();
  }
  inprogressData() {
    this.newMatches.length = 0;
    this.filteredMatches.length = 0;
    Object.keys(this.items).forEach(key => {
      if (this.items[key]["series"]["type"] === "IPL") {
        this.filteredMatches.push(this.items[key]);
      }
    });
    this.filteredMatches.forEach(innings => {
      this.players = innings.players;
      innings.score = innings.score ? innings.score : {};
      let ids = innings.score.batsman ? innings.score.batsman.map(item => item.id) : [];
      let bowlerids = innings.score.bowler ? innings.score.bowler.map(item => item.id) : [];
      const data = {
        status: innings.status,
        state_title: innings.state_title,
        time: new Date(innings.start_time * 1000),
        seriousType: innings.series,
        teamOne: innings.team1,
        teamTwo: innings.team2,
        venue: innings.venue,
        score: innings.score,
        bowler: innings.score ? innings.score.bowler : [],
        batsman: innings.score ? innings.score.batsman : [],
        teamRun: innings.score.batting ? innings.score.batting.innings : [],
        oppoTeamRun: innings.score.bowling ? innings.score.bowling.innings : [],
        batsManName: this.players ? this.players.filter(item => ids.includes(item.id)) : [],
        bowlerName: this.players ? this.players.filter(item => bowlerids.includes(item.id)) : []
      };

      let bowlingteamId = innings.score.bowling ? innings.score.bowling.id : "";
      if (innings.team1.id === bowlingteamId) {
        data["bowlingteam"] = this.getFirstLetters(innings.team1.name);
        data["battingTeam"] = this.getFirstLetters(innings.team2.name);
      } else {
        data["bowlingteam"] = this.getFirstLetters(innings.team2.name);
        data["battingTeam"] = this.getFirstLetters(innings.team1.name);
      }
      this.newMatches.push(data);
    });

    // console.log("new data", this.newMatches);
  }

  goNewMatchList(): void {
    this.routerExtensions.navigate(["/upcoming"], {
      transition: { name: "slideLeft" }
    });
  }
}
