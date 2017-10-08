import { Injectable }                         from '@angular/core';
import { EmptyTimesheetEntry }                from './empty-timesheet-entry';

import { ValidTimesheetEntry }                  from './timesheet.mock.model';   
import { TimesheetEntry }                       from '../timesheet-entry/timesheet-entry';             

@Injectable()
export class TimesheetEntryService {

  public static validTimesheetEntry(): TimesheetEntry {
    return ValidTimesheetEntry;
  }

  public static emptyTimesheetEntry(): EmptyTimesheetEntry {
    return new EmptyTimesheetEntry();
  }

}
