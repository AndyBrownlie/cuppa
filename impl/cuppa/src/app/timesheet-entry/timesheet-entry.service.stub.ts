import { TimesheetEntry }           from './timesheet-entry';
import { TimesheetEntryService }    from './timesheet-entry.service';
import { ITimesheetEntryService }   from './timesheet-entry.service.interface';

export class TimesheetEntryServiceStub implements ITimesheetEntryService {

    public post(timesheet: TimesheetEntry) { }
}
