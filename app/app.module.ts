import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataService } from "./data/data";
import { LiveService } from "./data/live-data";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UpcomingCricketService } from "./data/list-upcoming.services";
import { CricketChartComponent } from './cricket-chart/cricket-chart.component';
import { MatchesDetailsComponent } from "./upcoming-matches/matches-details/matches-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OldMatchesComponent } from "./old-matches/old-matches.component";
import { PlayerDetailsComponent } from "./upcoming-matches/player-details/player-details.component";
import { LiveScorePageComponent } from "./live-score/live-score.component";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptHttpModule
   ],
   providers: [
      DataService,
      LiveService,
      UpcomingCricketService
   ],
   declarations: [
      AppComponent,
      LandingPageComponent,
      CricketChartComponent,
      MatchesDetailsComponent,
      DashboardComponent,
      OldMatchesComponent,
      PlayerDetailsComponent,
      LiveScorePageComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
