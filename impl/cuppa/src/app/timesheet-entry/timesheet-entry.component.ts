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
     timesheetEntryGroup: FormGroup;
    private timesheetEntry: TimesheetEntry;
  
    constructor(private formBuilder: FormBuilder, private timesheetService: ITimesheetEntryService) { 
        this.createForm();
    }

    ngOnInit() {
        
    }

    private createForm() {
        this.timesheetEntryGroup = this.formBuilder.group({
        'contract':  ['', Validators.required ],
        'workAmount':  ['', Validators.required ]
        });
    }

    private onSubmit() {
        this.timesheetEntry = this.timesheetEntryGroup.value;
        this.timesheetService.post(this.timesheetEntry);      
    }

}
