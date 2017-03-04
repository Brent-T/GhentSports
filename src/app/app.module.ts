import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SportsOverviewComponent } from './sports-overview/sports-overview.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		SportsOverviewComponent
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
