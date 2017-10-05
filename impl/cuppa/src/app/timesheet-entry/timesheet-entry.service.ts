import { Injectable }       from '@angular/core';
import { TimesheetEntry }   from './timesheet-entry';

export interface ITimesheetEntryService {
  post(timesheet: TimesheetEntry)
}

@Injectable()
export class TimesheetEntryService implements ITimesheetEntryService {

  constructor() { }

  public post(timesheet: TimesheetEntry) {
    
  }

}
