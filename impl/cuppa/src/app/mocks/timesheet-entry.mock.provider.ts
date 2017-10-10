import { Injectable }                         from '@angular/core';

import { ValidTimesheetEntry, 
        InvalidTimesheetEntry, 
        EmptyTimesheetEntry }                  from './timesheet.mock.model';   
import { TimesheetEntry }                       from '../timesheet-entry/timesheet-entry';             

@Injectable()
export class TimesheetEntryMockProvider {

  public static validTimesheetEntry(): TimesheetEntry {
    return ValidTimesheetEntry;
  }

  public static emptyTimesheetEntry(): TimesheetEntry {
    return EmptyTimesheetEntry;
  }

  public static invalidTimesheetEntry(): TimesheetEntry {
    return InvalidTimesheetEntry;
  }

}
