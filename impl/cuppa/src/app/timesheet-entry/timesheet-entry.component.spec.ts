import { async, ComponentFixture, TestBed }     from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                     from '@angular/core';
import { TimesheetEntryComponent }              from './timesheet-entry.component';
import { FormBuilder }                          from '@angular/forms';

describe('TimesheetEntryComponent', () => {
  let component: TimesheetEntryComponent;
  let fixture: ComponentFixture<TimesheetEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetEntryComponent ],
      providers:    [ FormBuilder ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
