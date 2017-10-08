import { inject, TestBed, getTestBed,
    async, fakeAsync, ComponentFixture  }                  from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                                     from '@angular/core';
import { FormBuilder }                                          from '@angular/forms';
import { FormsModule, ReactiveFormsModule }                     from '@angular/forms';

import { TimesheetEntryComponent }                              from './timesheet-entry.component';
import { TimesheetEntryService }                                from './timesheet-entry.service';
import { TimesheetEntryServiceStub }                            from './timesheet-entry.service.stub';
import { TimesheetEntryService as MockTimesheetEntryService }   from '../mocks/timesheet-entry.service';


describe('TimesheetEntryComponent', () => {

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

    function updateForm(contract:string, workAmount:number) {
        comp.ngOnInit();
        comp.timesheetEntryFormGroup.controls['project'].setValue(contract);
        comp.timesheetEntryFormGroup.controls['workAmount'].setValue(workAmount);
    }

    it('should create component', () => {
        expect(comp).toBeTruthy();
    });

    it('form should be valid with populated values', fakeAsync(() => {
        var timesheet = MockTimesheetEntryService.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeTruthy();
    }));

    it('form should be invalid on creation', fakeAsync(() => {
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form should be invalid on empty', fakeAsync(() => {
        var timesheet = MockTimesheetEntryService.emptyTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form should be submitted with populated values', fakeAsync(() => {
        var timesheet = MockTimesheetEntryService.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        comp.onSubmit();
        expect(comp.timesheetEntry).toEqual(timesheet);
    }));
   
  
});
