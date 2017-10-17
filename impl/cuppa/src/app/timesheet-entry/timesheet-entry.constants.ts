import { InjectionToken }       from '@angular/core';
import { ITimesheetEntryService }      from './timesheet-entry.service.interface';

export const TIMESHEET_ENTRY_SERVICE = new InjectionToken<ITimesheetEntryService>('TimesheetEntryService');