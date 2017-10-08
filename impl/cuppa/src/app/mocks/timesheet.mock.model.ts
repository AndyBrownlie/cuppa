import { TimesheetEntry } from '../timesheet-entry/timesheet-entry';

export const ValidTimesheetEntry: TimesheetEntry = {
   date: null,
   project: "contract",
   workAmount: 0.25
};

export const InvalidTimesheetEntry: TimesheetEntry = {
    date: null,
    project: "contract",
    workAmount: null
 };

 export const EmptyTimesheetEntry: TimesheetEntry = {
    date: null,
    project: null,
    workAmount: null
 };