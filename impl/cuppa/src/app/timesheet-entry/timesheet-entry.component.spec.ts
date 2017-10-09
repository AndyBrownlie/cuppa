import { inject, TestBed, getTestBed,
    async, fakeAsync, ComponentFixture  }                   from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                                 from '@angular/core';
import { FormBuilder }                                      from '@angular/forms';
import { FormsModule, ReactiveFormsModule }                 from '@angular/forms';
import * as Moment                                          from 'moment';
import { TimesheetEntryComponent }                          from './timesheet-entry.component';
import { TimesheetEntryService, ITimesheetEntryService }    from './timesheet-entry.service';
import { TimesheetEntryServiceStub }                        from './timesheet-entry.service.stub';
import { TimesheetEntryMockService }                        from '../mocks/timesheet-entry.mock.service';


describe('TimesheetEntryComponent', () => {

    let comp: TimesheetEntryComponent;
    let fixture: ComponentFixture<TimesheetEntryComponent>;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            providers: [FormBuilder],
            declarations: [TimesheetEntryComponent],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .overrideComponent(TimesheetEntryComponent, {
        set: {
          providers: [{provide: TimesheetEntryService, useClass: TimesheetEntryServiceStub }]
        }})
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(TimesheetEntryComponent);
            comp = fixture.componentInstance;
        });
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
        var timesheet = TimesheetEntryMockService.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeTruthy();
    }));

    it('form should be invalid on creation', fakeAsync(() => {
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form should be invalid on empty', fakeAsync(() => {
        var timesheet = TimesheetEntryMockService.emptyTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form should be invalid on partial fill', fakeAsync(() => {
        var timesheet = TimesheetEntryMockService.invalidTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form should be submitted with correct project value', fakeAsync(() => {
        var timesheet = TimesheetEntryMockService.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        comp.onSubmit();
        expect(comp.timesheetEntry.project).toEqual(timesheet.project);
    }));
   
    it('form should be submitted with correct workAmount value', fakeAsync(() => {
        var timesheet = TimesheetEntryMockService.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        comp.onSubmit();
        expect(comp.timesheetEntry.workAmount).toEqual(timesheet.workAmount);
    }));

    it('form should be submitted with todays date', fakeAsync(() => {
        var timesheet = TimesheetEntryMockService.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        comp.onSubmit();
        var date = new Date(); 
        expect(comp.timesheetEntry.date.toDateString()).toEqual(date.toDateString());
    }));
  
});
