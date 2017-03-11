import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss']
})

export class SportDetail {
	name:String = '';

	constructor(private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.name = params['name'];
		});
	}
}
