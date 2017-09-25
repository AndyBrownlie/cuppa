import { Component, OnInit }                                from '@angular/core';
import { FormControl }                 from '@angular/forms';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {

  myControl: FormControl = new FormControl();
  options = [
    'Neueda | DAERA',
    'Neueda | LPS'
   ];

  constructor() { }

  ngOnInit() {
    
  }

}
