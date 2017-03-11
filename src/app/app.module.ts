import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SportsOverview } from './sports-overview/sports-overview.component';
import { SportItem } from './sport-item/sport-item.component';
import { SportDetail } from './sport-detail/sport-detail.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{ path: 'sports', component: SportsOverview },
	{ path: 'sport/:name', component: SportDetail },
	{ 
		path: '', 
		redirectTo: '/sports',
		pathMatch: 'full'
	},
	{ path: '**', component: PageNotFound }
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes)
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
