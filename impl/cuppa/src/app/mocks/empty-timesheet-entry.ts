import { TimesheetEntry }   from '../timesheet-entry/timesheet-entry';

export class EmptyTimesheetEntry implements TimesheetEntry {
    public date: Date = null;
    public project: string = null;
    public workAmount: number = null;
}
