import { Component, OnInit } from '@angular/core';

import { SportsService } from './../../services/sports.service';

import { Sport } from '../../models/sport';
import { SportCategory } from '../../models/enums';

@Component({
	selector: 'sports-overview',
	templateUrl: './sports-overview.component.html',
	styleUrls: ['./sports-overview.component.scss'],
	providers: [SportsService]
})

export class SportsOverview implements OnInit {
	sports: Sport[] = [];

	constructor(private sportsService: SportsService) { }

	ngOnInit() {
		this.sports = this.sportsService.getSports();
	}
}
