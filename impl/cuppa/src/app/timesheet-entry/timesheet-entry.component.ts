import { Component, OnInit }                                    from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators }      from '@angular/forms';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {

    private timesheetEntryGroup = new FormGroup({    
      contractControl: new FormControl(),
      workAmountControl: new FormControl()
    });

    private workingDay: boolean = true;
    private disableControls: boolean;
    private contractOptions = ['Neueda | DAERA','Neueda | LPS'];
  

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  private createForm() {
    this.timesheetEntryGroup = this.formBuilder.group({
      contractControl:  ['', Validators.required ],
      workAmountControl:  ['', Validators.required ]
    });
  }


  onWorkingDayStatusChange() {
    this.workingDay = !this.workingDay;
    this.disableControls = !this.workingDay;
  }
  ngOnInit() {
    
  }

}
