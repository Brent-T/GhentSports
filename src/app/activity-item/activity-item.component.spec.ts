import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { ActivityItem } from './activity-item.component';

import { Activity } from './../../models/activity';
import { User } from './../../models/user';

describe('ActivityItem - rendering', () => {

	let comp: ActivityItem;
	let fixture: ComponentFixture<ActivityItem>;
	let testActivity: Activity;
	let de_activity__title: DebugElement;
	let activity__title: HTMLElement;
	let de_activity__location: DebugElement;
	let activity__location: HTMLElement;
	let de_activity__description: DebugElement;
	let activity__description: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],			
			declarations: [ ActivityItem ],
		});

		fixture = TestBed.createComponent(ActivityItem); // SportItem component
		comp = fixture.componentInstance; // SportItem test instance

		testActivity = new Activity('some-name', 'some-sport', 'some-location', 'some-description', new User('some-id', 'some-username', 'some-picture'));

		de_activity__title = fixture.debugElement.query(By.css('.activity__title'));
		activity__title = de_activity__title.nativeElement;

		de_activity__location = fixture.debugElement.query(By.css('.activity__location'));
		activity__location = de_activity__location.nativeElement;

		de_activity__description = fixture.debugElement.query(By.css('.activity__description'));
		activity__description = de_activity__description.nativeElement;
	});

	it('should render activity info', () => {
		comp.activity = testActivity;
		fixture.detectChanges();

		expect(activity__title.textContent).toContain(testActivity.user.name);
		expect(activity__title.textContent).toContain(testActivity.sport);	
		expect(activity__location.textContent).toContain(testActivity.name);
		expect(activity__location.textContent).toContain(testActivity.location);	
		expect(activity__description.textContent).toBe(testActivity.description);	
	});
});
