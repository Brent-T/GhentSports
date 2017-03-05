import { Component, Input } from '@angular/core';

@Component({
	selector: 'sport-item',
	templateUrl: './sport-item.component.html',
	styleUrls: ['./sport-item.component.scss']
})

export class SportItem { 
	@Input() sport:Object;	

}
