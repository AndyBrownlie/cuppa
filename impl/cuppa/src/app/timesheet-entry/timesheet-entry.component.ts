import { Component, OnInit, Inject }                        from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators }  from '@angular/forms';

import { TimesheetEntry }                                   from './timesheet-entry';                             
import { ITimesheetEntryService }                           from './timesheet-entry.service.interface';
import { TIMESHEET_ENTRY_SERVICE }                          from './timesheet-entry.constants';
import { IProjectService }                                  from '../shared/project.service.interface';
import { PROJECT_SERVICE }                                  from '../shared/project.constants';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {

    public projectOptions: string[] = [];
    public timesheetEntryFormGroup: FormGroup;
    public timesheetEntry: TimesheetEntry;
    private today: Date = new Date();
  
    constructor(private formBuilder: FormBuilder, 
                @Inject(TIMESHEET_ENTRY_SERVICE) private timesheetService: ITimesheetEntryService,
                @Inject(PROJECT_SERVICE) private projectService: IProjectService ) { 
        this.createForm();
    }

    ngOnInit() {
        var projects = this.projectService.getProjectsForMonth(this.today);
        projects.forEach(project => {
            this.projectOptions.push(project.name);
        });
        
            this.timesheetEntryFormGroup.setValue({
                    project: '', 
                    workAmount: '100', 
                    date: null
                });        
        
        if(projects.length == 1) {
            this.timesheetEntryFormGroup.setValue({
                    project: projects[0].name, 
                    workAmount: '100', 
                    date: null
                });        
        }
    }

    private createForm() {
        this.timesheetEntryFormGroup = this.formBuilder.group({
        'project':  ['', Validators.required ],
        'workAmount':  ['', Validators.required ],
        'date':[]
        });
    }

    public onSubmit() {
        this.timesheetEntry = this.timesheetEntryFormGroup.value;
        this.timesheetEntry.date = new Date();
        this.timesheetService.post(this.timesheetEntry);
    }

}
