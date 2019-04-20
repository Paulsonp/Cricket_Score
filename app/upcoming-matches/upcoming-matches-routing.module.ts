import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { UpcomingMatchesComponent } from "./upcoming-matches.component";

const routes: Routes = [
    { path: "", component: UpcomingMatchesComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class UpcomingMatchesRoutingModule { }
