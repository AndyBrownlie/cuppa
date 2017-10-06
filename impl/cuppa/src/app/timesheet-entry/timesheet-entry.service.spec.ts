import { inject, TestBed, getTestBed,
         async, fakeAsync, ComponentFixture  }  from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                     from '@angular/core';
import { FormBuilder }                          from '@angular/forms';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';

import { TimesheetEntryComponent }              from './timesheet-entry.component';
import { TimesheetEntryService }                from './timesheet-entry.service';
import { TimesheetEntryServiceStub }            from './timesheet-entry.service.stub';

let comp: TimesheetEntryComponent;
let fixture: ComponentFixture<TimesheetEntryComponent>;
let serviceStub: TimesheetEntryServiceStub;

describe('TimesheetEntryService', () => {
  
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

    function updateForm(contract:string, workAmount:string) {
        comp.ngOnInit();
        comp.timesheetEntryGroup.controls['contract'].setValue(contract);
        comp.timesheetEntryGroup.controls['workAmount'].setValue(workAmount);
    }

    it('form should be valid with selected values', fakeAsync(() => {
        updateForm("dfdsf", "fd");
        expect(comp.timesheetEntryGroup.valid).toBeTruthy();
    }));

    it('form should be invalid with no selected values', fakeAsync(() => {
        expect(comp.timesheetEntryGroup.valid).toBeFalsy();
    }));
});
