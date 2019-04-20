import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CricketChartComponent } from "./cricket-chart/cricket-chart.component";
import { MatchesDetailsComponent } from "./upcoming-matches/matches-details/matches-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OldMatchesComponent } from "./old-matches/old-matches.component";
import { PlayerDetailsComponent } from "./upcoming-matches/player-details/player-details.component";
import { LiveScorePageComponent } from "./live-score/live-score.component";


const routes: Routes = [
    { path: "", redirectTo: "landing", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "upcoming", loadChildren: "./upcoming-matches/upcoming-matches.module#UpcomingMatchesModule" },
    { path: 'cricketCalender', component: CricketChartComponent},
    { path: "landing", component: LandingPageComponent},
    { path: "dashboard", component: DashboardComponent},
    { path: "oldMatches", component: OldMatchesComponent},
    { path: "liveScorePage", component: LiveScorePageComponent},
    {
        path: "matchDetails/:id", component: MatchesDetailsComponent
    },
    { path: "playerDetails/:id", component: PlayerDetailsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
