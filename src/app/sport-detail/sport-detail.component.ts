import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParksService } from './../../services/parks.service';
import { BuurtsportLocatiesService } from './../../services/buurtsportlocaties.service';
import { Xml2JsonService } from './../../services/xml2json.service';
import { Park } from './../../models/park';
import { Location } from './../../models/location';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [ParksService, BuurtsportLocatiesService, Xml2JsonService]
})

export class SportDetail implements OnInit {
	name:string = '';
	// parks:Park[];
	locations: Object[];

	constructor(private route: ActivatedRoute, private parksService: ParksService, private buursportLocatieService: BuurtsportLocatiesService) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.name = params['name'];
		});	

		// this.parksService.getParks().then((parks:Park[]) => {
		// 	this.parks = parks;
		// });

		this.buursportLocatieService.getBuursportLocaties('Basketbal').then((locations:Location[]) => {
			this.locations = locations;
			console.log(locations);
		});
	}
}
