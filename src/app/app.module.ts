import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SportsService } from './../services/sports.service';
import { SportLocationService } from './../services/sportlocations.service';
import { BuurtsportLocatiesService } from './../services/buurtsportlocaties.service';
import { ParksService } from './../services/parks.service';
import { Xml2JsonService } from './../services/xml2json.service';
import { GeolocationService } from './../services/geolocation.service';
import { UserService } from './../services/user.service';

import { AppHeader } from './app-header/app-header.component';
import { AppNav } from './app-nav/app-nav.component';
import { SportsOverview } from './sports-overview/sports-overview.component';
import { SportItem } from './sport-item/sport-item.component';
import { ActivityOverview } from './activity-overview/activity-overview.component';
import { ActivityItem } from './activity-item/activity-item.component';
import { SportDetail } from './sport-detail/sport-detail.component';
import { SportsMap } from './sports-map/sports-map.component';
import { ShareModal } from './share-modal/share-modal.component';
import { Spinner } from './spinner/spinner.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		FacebookModule.forRoot(),
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyBnKEhQeu22y99AZMnw7FQecRsqzV1UT-g' }),
		ModalModule.forRoot(),
		BootstrapModalModule,
	],
	declarations: [
		AppComponent,
		AppHeader,
		AppNav,
		SportsOverview,
		SportItem,
		ActivityOverview,
		ActivityItem,
		SportDetail,
		SportsMap,
		ShareModal,
		Spinner,
		PageNotFound,
	],
	providers: [
		SportsService,
		SportLocationService,
		BuurtsportLocatiesService,
		ParksService,
		Xml2JsonService,
		GeolocationService,
		UserService,
	],
	bootstrap: [ AppComponent ],
	entryComponents: [ ShareModal ]
})

export class AppModule { }
