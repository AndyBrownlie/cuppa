import { Injectable }               from '@angular/core';
import { TimesheetEntry }           from './timesheet-entry';
import { ITimesheetEntryService }   from './timesheet-entry.service.interface';

@Injectable()
export class TimesheetEntryService implements ITimesheetEntryService {

  constructor() { }

  public post(timesheet: TimesheetEntry) {
    
  }

}
