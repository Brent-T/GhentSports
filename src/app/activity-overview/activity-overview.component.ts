import { Component, OnInit } from '@angular/core';

import { ActivityService } from './../../services/activity.service';

@Component({
	selector: 'activity-overview',
	templateUrl: './activity-overview.component.html',
	styleUrls: ['./activity-overview.component.scss'],
	providers: [ActivityService]
})

export class ActivityOverview implements OnInit {
	public activities: any = [];

	constructor(private activityService: ActivityService) { }

	ngOnInit() {
		this.activityService.getActivities().then((data: any) => {
			this.activities = data;
		});
	}
}
