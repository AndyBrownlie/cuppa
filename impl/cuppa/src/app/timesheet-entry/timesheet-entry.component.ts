import { Component, OnInit }                                    from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators }      from '@angular/forms';

import { TimesheetEntry }                                       from './timesheet-entry';                             
import { TimesheetEntryService }                                from './timesheet-entry.service';
import { ProjectService }                                       from '../shared/project.service';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {

    public projectOptions: string[] = [];
    public timesheetEntryFormGroup: FormGroup;
    public timesheetEntry: TimesheetEntry;
  
    constructor(private formBuilder: FormBuilder, 
                private timesheetService: TimesheetEntryService,
                private projectService: ProjectService) { 
        this.createForm();
    }

    ngOnInit() {
        var projects = this.projectService.getProjects();
        projects.forEach(project => {
            this.projectOptions.push(project.name);
        });
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
