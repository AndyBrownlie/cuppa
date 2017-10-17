import { TimesheetEntry }   from './timesheet-entry';

export interface ITimesheetEntryService {
  post(timesheet: TimesheetEntry)
}