import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParksService } from './../../services/parks.service';
import { Park } from './../../models/park';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [ParksService]
})

export class SportDetail implements OnInit {
	name:string = '';
	parks:Park[];

	constructor(private route: ActivatedRoute, private parksService: ParksService) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.name = params['name'];
		});	

		this.parksService.getParks().then((parks:Park[]) => {
			console.log(parks);
			this.parks = parks;			
		});
	}
}
