import { Component, OnInit }                                    from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators }      from '@angular/forms';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {

  private contractOptions = ['Neueda | DAERA','Neueda | LPS'];
  private timesheetEntryGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  private createForm() {
    this.timesheetEntryGroup = this.formBuilder.group({
      contractControl:  ['', Validators.required ],
      workAmountControl:  ['', Validators.required ]
    });
  }

  ngOnInit() {
    
  }

}
