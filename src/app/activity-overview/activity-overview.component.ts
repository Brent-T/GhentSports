import { Component, OnInit } from '@angular/core';

import { ActivityService } from './../../services/activity.service';

import { Activity } from './../../models/activity';

@Component({
	selector: 'activity-overview',
	templateUrl: './activity-overview.component.html',
	styleUrls: ['./activity-overview.component.scss'],
	providers: [ActivityService]
})

export class ActivityOverview implements OnInit {
	public activities: Activity[] = [];

	constructor(private activityService: ActivityService) { }

	ngOnInit() {
		this.activityService.getActivities().then((data: Activity[]) => {
			this.activities = data;
		});
	}
}
