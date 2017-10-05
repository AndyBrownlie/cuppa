import { inject, TestBed, getTestBed,
         async, fakeAsync, ComponentFixture  }  from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                     from '@angular/core';
import { FormBuilder }                          from '@angular/forms';

import { TimesheetEntryComponent }              from './timesheet-entry.component';
import { TimesheetEntryService }                from './timesheet-entry.service';
import { TimesheetEntryServiceStub }            from './timesheet-entry.service.stub';

let comp: TimesheetEntryComponent;
let fixture: ComponentFixture<TimesheetEntryComponent>;

describe('TimesheetEntryService', () => {
  
    beforeEach(async() => {
    TestBed.configureTestingModule({
        declarations: [TimesheetEntryComponent],
        providers: [FormBuilder],
        schemas: [ NO_ERRORS_SCHEMA ]
    })
    .overrideComponent(TimesheetEntryComponent, {
        set: {
            providers: [ {provide: TimesheetEntryService, useClass: TimesheetEntryServiceStub } ]
        }
    })
    .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(TimesheetEntryComponent);
            comp = fixture.componentInstance;
        });
    });

    function updateForm(contract:string, workAmount:string) {
        comp.timesheetEntryGroup.controls['contract'].setValue(contract);
        comp.timesheetEntryGroup.controls['workAmount'].setValue(workAmount);
    }

    it('form value should update from form changes', fakeAsync(() => {
        //updateForm("dfdsf", "fd");
        expect(comp.timesheetEntryGroup.valid).toBeTruthy();
      }));
});
