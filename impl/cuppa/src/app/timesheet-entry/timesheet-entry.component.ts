import { Component, OnInit }                                    from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators }      from '@angular/forms';

import { TimesheetEntry }                                       from './timesheet-entry';                             
import { ITimesheetEntryService }                               from './timesheet-entry.service';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {

    private contractOptions = ['Neueda | DAERA','Neueda | LPS'];
    public timesheetEntryFormGroup: FormGroup;
    public timesheetEntry: TimesheetEntry;
  
    constructor(private formBuilder: FormBuilder){//, private timesheetService: ITimesheetEntryService) { 
        this.createForm();
    }

    ngOnInit() {
        
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
       /*  this.timesheetEntry.project = this.timesheetEntryFormGroup.controls['project'].value;
        this.timesheetEntry.workAmount = this.timesheetEntryFormGroup.controls['workAmount'].value; */
         //this.timesheetService.post(this.timesheetEntry);      
    }

}
