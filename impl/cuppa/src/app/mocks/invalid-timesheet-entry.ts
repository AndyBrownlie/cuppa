import { TimesheetEntry }   from '../timesheet-entry/timesheet-entry';

export class InvalidTimesheetEntry implements TimesheetEntry {
    public date: Date;
    public project: string = null;
    public workAmount: number = 0.25;
}
