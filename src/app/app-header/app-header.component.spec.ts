import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserService } from './../../services/user.service';
import { FacebookService, InitParams, LoginResponse, AuthResponse } from 'ngx-facebook';

import { AppHeader } from './app-header.component';

import { User } from './../../models/user';

describe('AppHeader - title', () => {

	let comp: AppHeader;
	let fixture: ComponentFixture<AppHeader>;
	let de_header_title: DebugElement;
	let header_title: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [AppHeader],
			providers: [
				UserService,
				FacebookService,
				{ provide: ComponentFixtureAutoDetect, useValue: true }
			]
		});

		fixture = TestBed.createComponent(AppHeader); // AppHeader component
		comp = fixture.componentInstance; // AppHeader test instance

		de_header_title = fixture.debugElement.query(By.css('.header__title'));
		header_title = de_header_title.nativeElement;
	});

	it('should display original title', () => {	  
		expect(header_title.textContent).toContain(comp.title);
	});

	it('should still see original title after comp.title change', () => {
		const oldTitle = comp.title;
		comp.title = 'Test Title';	  
		expect(header_title.textContent).toContain(oldTitle);
	});

	it('should display updated title after detectChanges', () => {
		comp.title = 'Test Title';
		fixture.detectChanges();
		expect(header_title.textContent).toContain(comp.title);
	});
});

describe('AppHeader - login', () => {

	let comp: AppHeader;
	let fixture: ComponentFixture<AppHeader>;
	let userService: UserService;
	let de_header_loggedOut: DebugElement;
	let header_loggedIn: HTMLElement;
	let de_header_loggedIn: DebugElement;
	let header_loggedOut: HTMLElement;
	let testUser: User;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],			
			declarations: [ AppHeader ],
			providers: [
				UserService,
				FacebookService,
				{ provide: ComponentFixtureAutoDetect, useValue: true }
			]
		});

		fixture = TestBed.createComponent(AppHeader); // AppHeader component
		comp = fixture.componentInstance; // AppHeader test instance
		userService = fixture.debugElement.injector.get(UserService);

		testUser = new User('some-id', 'some-name', 'some-picture');
		const spy = spyOn(userService, 'loginWithFacebook')
      		.and.returnValue(Promise.resolve(testUser));
	});

	it('should show user info', (done: DoneFn) => {	  
		userService.loginWithFacebook().then((user: User) => {
			comp.currentUser = user;
			fixture.detectChanges();

			de_header_loggedIn = fixture.debugElement.query(By.css('.header__username'));
			header_loggedIn = de_header_loggedIn.nativeElement;
			expect(header_loggedIn.textContent).toContain(testUser.name);
			done();
		});
	});
});
