import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParksService } from './../../services/parks.service';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [ParksService]
})

export class SportDetail implements OnInit {
	name:String = '';

	constructor(private route: ActivatedRoute, private parksService: ParksService) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.name = params['name'];
		});	

		const text = this.parksService.getParks();
		console.log(text);
	}
}
