import { inject, TestBed, getTestBed,
  async, fakeAsync, ComponentFixture  }     from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                 from '@angular/core';

import { AppComponent }                     from './app.component';
import { AuthorisationService }             from './core/authorisation.service';
import { AuthorisationServiceStub }         from './core/authorisation.service.stub';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;
let compiled: any;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{provide: AuthorisationService, useClass: AuthorisationServiceStub }],
      schemas:      [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'cuppa'`, async(() => {
    expect(app.title).toEqual('cuppa');
  }));

});
