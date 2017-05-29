import { Component, Input } from '@angular/core';

@Component({
	selector: 'activity-item',
	templateUrl: './activity-item.component.html',
	styleUrls: ['./activity-item.component.scss']
})

export class ActivityItem { 
	@Input() activity: any;
}
