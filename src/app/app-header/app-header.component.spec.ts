import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserService } from './../../services/user.service';

import { AppHeader } from './app-header.component';

describe('AppHeader', () => {

  let comp: AppHeader;
  let fixture: ComponentFixture<AppHeader>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeader ],
      providers: [
	    { provide: ComponentFixtureAutoDetect, useValue: true }
	  ]
    });

    fixture = TestBed.createComponent(AppHeader); // AppHeader component

    comp = fixture.componentInstance; // AppHeader test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

	it('should display original title', () => {	  
	  expect(el.textContent).toContain(comp.title);
	});

	it('should still see original title after comp.title change', () => {
	  const oldTitle = comp.title;
	  comp.title = 'Test Title';	  
	  expect(el.textContent).toContain(oldTitle);
	});

	it('should display updated title after detectChanges', () => {
	  comp.title = 'Test Title';
	  fixture.detectChanges();
	  expect(el.textContent).toContain(comp.title);
	});
});
