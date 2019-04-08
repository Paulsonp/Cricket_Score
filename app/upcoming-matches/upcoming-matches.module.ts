import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { UpcomingMatchesComponent } from "./upcoming-matches.component";
import { UpcomingMatchesRoutingModule } from "./upcoming-matches-routing.module";
import { MatchesDetailsComponent } from "./matches-details/matches-details.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		UpcomingMatchesRoutingModule
	],
	declarations: [
        UpcomingMatchesComponent,
        MatchesDetailsComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class UpcomingMatchesModule { }