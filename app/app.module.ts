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
      CricketChartComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
