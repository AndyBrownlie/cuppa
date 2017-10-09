import { TimesheetEntry } from '../timesheet-entry/timesheet-entry';

export const ValidTimesheetEntry: TimesheetEntry = {
   date: new Date(),
   project: "contract",
   workAmount: 0.25
};

export const InvalidTimesheetEntry: TimesheetEntry = {
    date: new Date(),
    project: "contract",
    workAmount: null
 };

 export const EmptyTimesheetEntry: TimesheetEntry = {
    date: new Date(),
    project: null,
    workAmount: null
 };