import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataService } from "./data/data";
import { LiveService } from "./data/live-data";
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule
   ],
   providers: [
      DataService,
      LiveService
   ],
   declarations: [
      AppComponent,
      LandingPageComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
