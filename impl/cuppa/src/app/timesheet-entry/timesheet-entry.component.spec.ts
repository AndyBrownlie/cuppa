import { inject, TestBed, getTestBed,
    async, fakeAsync, ComponentFixture  }                   from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }                                 from '@angular/core';
import { FormBuilder }                                      from '@angular/forms';
import { FormsModule, ReactiveFormsModule }                 from '@angular/forms';
import * as Moment                                          from 'moment';

import { TimesheetEntryComponent }                          from './timesheet-entry.component';
import { TimesheetEntryService }                            from './timesheet-entry.service';
import { ITimesheetEntryService }                           from './timesheet-entry.service.interface';
import { TIMESHEET_ENTRY_SERVICE }                          from './timesheet-entry.constants';
import { TimesheetEntryServiceStub }                        from './timesheet-entry.service.stub';
import { TimesheetEntryMockProvider }                       from '../mocks/timesheet-entry.mock.provider';
import { IProjectService }                                  from '../shared/project.service.interface';
import { PROJECT_SERVICE }                                  from '../shared/project.constants';
import { ProjectServiceStub }                               from '../shared/project.service.stub';
import { ProjectMockProvider }                              from '../mocks/project.mock.provider';

describe('TimesheetEntryComponent', () => {

    let comp: TimesheetEntryComponent;
    let fixture: ComponentFixture<TimesheetEntryComponent>;
    
    beforeEach(done => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            providers: [FormBuilder],
            declarations: [TimesheetEntryComponent],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .overrideComponent(TimesheetEntryComponent, {
        set: {
          providers: [
              {provide: TIMESHEET_ENTRY_SERVICE, useClass: TimesheetEntryServiceStub },
              {provide: PROJECT_SERVICE, useClass: ProjectServiceStub}
            ]
        }})
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(TimesheetEntryComponent);
            comp = fixture.componentInstance;
            done();
        }); 
    });

     function updateForm(contract:string, workAmount:number) {
        comp.ngOnInit();
        comp.timesheetEntryFormGroup.controls['project'].setValue(contract);
        comp.timesheetEntryFormGroup.controls['workAmount'].setValue(workAmount);
    } 

    it('should create component', () => {
        fixture = TestBed.createComponent(TimesheetEntryComponent);
        comp = fixture.componentInstance;
        expect(comp).toBeTruthy();
    }); 

    it('form should be valid with populated values', fakeAsync(() => {
        var timesheet = TimesheetEntryMockProvider.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeTruthy();
    }));

    it('form should be invalid on creation', fakeAsync(() => {
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form loads multiple existing projects on creation', fakeAsync(() => {
        comp.ngOnInit();
        expect(comp.projectOptions.length).toEqual(ProjectMockProvider.ValidProjects().length);
    }));

    it('form loads no existing projects on creation', fakeAsync(() => {
        let mockProjectService = new ProjectServiceStub();
        let spy = spyOn(mockProjectService, "getProjectsForMonth").and.returnValues(ProjectMockProvider.NoProjects());
        comp = new TimesheetEntryComponent(new FormBuilder(), new TimesheetEntryServiceStub(), mockProjectService);
        comp.ngOnInit();
        expect(comp.projectOptions.length).toEqual(0);
    }));

    it('form loads project when 1 project loaded on creation', fakeAsync(() => {
        let mockProjectService = new ProjectServiceStub();
        let spy = spyOn(mockProjectService, "getProjectsForMonth").and.returnValues(ProjectMockProvider.ValidSingleProject());
        comp = new TimesheetEntryComponent(new FormBuilder(), new TimesheetEntryServiceStub(), mockProjectService);
        comp.ngOnInit();
        expect(comp.projectOptions.length).toEqual(1);
    }));

    it('form default selects existing project when 1 project loaded on creation', fakeAsync(() => {
        let mockProjectService = new ProjectServiceStub();
        let spy = spyOn(mockProjectService, "getProjectsForMonth").and.returnValues(ProjectMockProvider.ValidSingleProject());
        comp = new TimesheetEntryComponent(new FormBuilder(), new TimesheetEntryServiceStub(), mockProjectService);
        comp.ngOnInit();
      
        expect(comp.timesheetEntryFormGroup.controls['project'].value).toEqual(ProjectMockProvider.ValidSingleProject()[0].name);
    }));

    it('form default selects 100 workAmount on creation', fakeAsync(() => {
        comp.ngOnInit();
        expect(comp.timesheetEntryFormGroup.controls['workAmount'].value).toEqual('100');
    }));

    it('form should be invalid on empty', fakeAsync(() => {
        var timesheet = TimesheetEntryMockProvider.emptyTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form should be invalid on partial fill', fakeAsync(() => {
        var timesheet = TimesheetEntryMockProvider.invalidTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        expect(comp.timesheetEntryFormGroup.valid).toBeFalsy();
    }));

    it('form should be submitted with correct project value', fakeAsync(() => {
        var timesheet = TimesheetEntryMockProvider.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        comp.onSubmit();
        expect(comp.timesheetEntry.project).toEqual(timesheet.project);
    }));
   
    it('form should be submitted with correct workAmount value', fakeAsync(() => {
        var timesheet = TimesheetEntryMockProvider.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        comp.onSubmit();
        expect(comp.timesheetEntry.workAmount).toEqual(timesheet.workAmount);
    }));

    it('form should be submitted with todays date', fakeAsync(() => {
        var timesheet = TimesheetEntryMockProvider.validTimesheetEntry();
        updateForm(timesheet.project, timesheet.workAmount);
        comp.onSubmit();
        var date = new Date(); 
        expect(comp.timesheetEntry.date.toDateString()).toEqual(date.toDateString());
    }));
  
});
