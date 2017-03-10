import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SportsOverviewComponent } from './sports-overview/sports-overview.component';
import { SportItem } from './sport-item/sport-item.component';

describe('App', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({ declarations: [AppComponent, SportsOverviewComponent, SportItem]});
	});
	it ('should work', () => {
		let fixture = TestBed.createComponent(AppComponent);
		expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
	});
});
