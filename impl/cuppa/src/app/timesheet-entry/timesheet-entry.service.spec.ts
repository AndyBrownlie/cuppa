import { inject, TestBed, getTestBed,
         async, fakeAsync, ComponentFixture  }                  from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                                     from '@angular/core';
import { FormBuilder }                                          from '@angular/forms';
import { FormsModule, ReactiveFormsModule }                     from '@angular/forms';

import { TimesheetEntryComponent }                              from './timesheet-entry.component';
import { TimesheetEntryService }                                from './timesheet-entry.service';
import { TimesheetEntryServiceStub }                            from './timesheet-entry.service.stub';
import { TimesheetEntryMockService }                            from '../mocks/timesheet-entry.mock.service';


describe('TimesheetEntryService', () => {
    
    let comp: TimesheetEntryComponent;
    let fixture: ComponentFixture<TimesheetEntryComponent>;
    let serviceStub: TimesheetEntryServiceStub;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            providers: [FormBuilder, {provide: TimesheetEntryService, useClass: TimesheetEntryServiceStub }],
            declarations: [TimesheetEntryComponent],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
   
        fixture = TestBed.createComponent(TimesheetEntryComponent);
        comp = fixture.componentInstance;
    });

    
});
