import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SportLocationService } from './../../services/sportlocations.service';
import { ParksService } from './../../services/parks.service';
import { BuurtsportLocatiesService } from './../../services/buurtsportlocaties.service';
import { LoopRoutesService } from './../../services/looproutes.service';
import { Xml2JsonService } from './../../services/xml2json.service';

import { SportCategory } from './../../models/enums';
import { Park } from './../../models/park';
import { Location } from './../../models/location';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [SportLocationService, ParksService, BuurtsportLocatiesService, LoopRoutesService, Xml2JsonService]
})

export class SportDetail implements OnInit {
	name:string = '';
	// parks:Park[];
	locations: Object[];

	constructor(private route: ActivatedRoute,  private sportLocationsSerivce: SportLocationService, private parksService: ParksService, private buursportLocatieService: BuurtsportLocatiesService, private loopRoutesService: LoopRoutesService) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.name = params['name'];
		});	

		this.sportLocationsSerivce.getLocations(SportCategory.Football).then((data:any) => {
			console.log('response', data);
		})
	}
}
