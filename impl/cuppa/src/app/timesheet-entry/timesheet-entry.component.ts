import { Component, OnInit }                                from '@angular/core';
import { FormControl }                 from '@angular/forms';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {

  private myControl: FormControl = new FormControl();
  private workingDay: boolean = true;
  private disableControls: boolean;
  private options = ['Neueda | DAERA','Neueda | LPS'];
  

  constructor() { }

  onWorkingDayStatusChange() {
    this.workingDay = !this.workingDay;
    this.disableControls = !this.workingDay;
  }
  ngOnInit() {
    
  }

}
