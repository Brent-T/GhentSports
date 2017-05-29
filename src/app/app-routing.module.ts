import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SportsOverview } from './sports-overview/sports-overview.component';
import { SportDetail } from './sport-detail/sport-detail.component';
import { ActivityOverview } from './activity-overview/activity-overview.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{ path: 'sports', component: SportsOverview },
	{ path: 'sport/:id', component: SportDetail },
	{ path: 'activities', component: ActivityOverview },
	{ 
		path: '', 
		redirectTo: '/sports',
		pathMatch: 'full'
	},
	{ path: '**', component: PageNotFound }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}
