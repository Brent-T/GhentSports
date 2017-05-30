import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { ActivityService } from './../../services/activity.service';

export class ShareModalContext extends BSModalContext {
	public sport: string;
	public location: string;
}

@Component({
	selector: 'share-modal',
	templateUrl: './share-modal.component.html',
	styleUrls: ['./share-modal.component.scss'],
	providers: [ActivityService],
})

export class ShareModal implements CloseGuard, ModalComponent<ShareModalContext> {
	context: ShareModalContext;

	public activity_name: string = '';
	public activity_description: string = '';

	constructor(public dialog: DialogRef<ShareModalContext>, private activitiyService: ActivityService,) {
		this.context = dialog.context;
		dialog.setCloseGuard(this);
	}

	onSubmit() {
		const activity = {
			name: this.activity_name,
			description: this.activity_description,
			sport: this.context.sport,
			location: this.context.location,
		}
		this.activitiyService.addActivity(activity);
		this.dialog.close();
	}

	onCancel() {
		this.dialog.close();		
	}
}
