import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SportsOverview } from './sports-overview/sports-overview.component';
import { SportItem } from './sport-item/sport-item.component';
import { SportDetail } from './sport-detail/sport-detail.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		SportsOverview,
		SportItem,
		SportDetail,
		PageNotFound
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
