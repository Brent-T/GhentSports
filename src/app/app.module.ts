import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SportsService } from './../services/sports.service';
import { SportLocationService } from './../services/sportlocations.service';
import { LoopRoutesService } from './../services/looproutes.service';
import { BuurtsportLocatiesService } from './../services/buurtsportlocaties.service';
import { ParksService } from './../services/parks.service';
import { Xml2JsonService } from './../services/xml2json.service';
import { GeolocationService } from './../services/geolocation.service';

import { AppHeader } from './app-header/app-header.component';
import { SportsOverview } from './sports-overview/sports-overview.component';
import { SportItem } from './sport-item/sport-item.component';
import { SportDetail } from './sport-detail/sport-detail.component';
import { SportsMap } from './sports-map/sports-map.component';
import { Spinner } from './spinner/spinner.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpModule,
		FacebookModule.forRoot(),
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyBnKEhQeu22y99AZMnw7FQecRsqzV1UT-g' }),
	],
	declarations: [
		AppComponent,
		AppHeader,
		SportsOverview,
		SportItem,
		SportDetail,
		SportsMap,
		Spinner,
		PageNotFound,
	],
	providers: [
		SportsService,
		SportLocationService,
		LoopRoutesService,
		BuurtsportLocatiesService,
		ParksService,
		Xml2JsonService,
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
