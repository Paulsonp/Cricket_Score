import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CricketChartComponent } from "./cricket-chart/cricket-chart.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "upcoming", loadChildren: "./upcoming-matches/upcoming-matches.module#UpcomingMatchesModule" },
    { path: 'cricketCalender', component: CricketChartComponent},
    { path: "landing", component: LandingPageComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
