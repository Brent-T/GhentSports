import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SportsOverviewComponent } from './sports-overview/sports-overview.component';
import { SportItem } from './sport-item/sport-item.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		SportsOverviewComponent,
		SportItem
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
