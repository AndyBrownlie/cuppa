import { Injectable }                         from '@angular/core';
import { ValidTimesheetEntry }                from './valid-timesheet-entry';
import { EmptyTimesheetEntry }                from './empty-timesheet-entry';

@Injectable()
export class TimesheetEntryService {


  public static validTimesheetEntry(): ValidTimesheetEntry {
    return new ValidTimesheetEntry();
  }

  public static emptyTimesheetEntry(): EmptyTimesheetEntry {
    return new EmptyTimesheetEntry();
  }

}
