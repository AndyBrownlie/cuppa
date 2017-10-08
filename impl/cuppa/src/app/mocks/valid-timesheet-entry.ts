import { TimesheetEntry }   from '../timesheet-entry/timesheet-entry';

export class ValidTimesheetEntry implements TimesheetEntry {
    public date: Date;
    public project: string = "contract";
    public workAmount: number = 0.25;
}