import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { SportItem } from './sport-item.component';

import { Sport } from './../../models/sport';

describe('SportItem - rendering', () => {

	let comp: SportItem;
	let fixture: ComponentFixture<SportItem>;
	let testSport: Sport;
	let de_item_title: DebugElement;
	let item_title: HTMLElement;
	let de_item_icon: DebugElement;
	let item_icon: HTMLElement;
	let de_item_button: DebugElement;
	let item_button: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],			
			declarations: [ SportItem ],
		});

		fixture = TestBed.createComponent(SportItem); // SportItem component
		comp = fixture.componentInstance; // SportItem test instance

		testSport = new Sport(123456, 'some-name', 'some-icon', null);

		de_item_title = fixture.debugElement.query(By.css('.sportItem__title'));
		item_title = de_item_title.nativeElement;

		de_item_icon = fixture.debugElement.query(By.css('.sportItem__img'));
		item_icon = de_item_icon.nativeElement;

		de_item_button = fixture.debugElement.query(By.css('.button'));
		item_button = de_item_button.nativeElement;
	});

	it('should render sport info', () => {
		comp.sport = testSport;
		fixture.detectChanges();

		expect(item_title.textContent).toBe(testSport.name);
		expect(item_icon.attributes['src'].textContent).toBe(testSport.icon);		
	});
});
