import { Injectable }               from '@angular/core';
import { TimesheetEntry }           from './timesheet-entry';
import { ITimesheetEntryService }   from './timesheet-entry.service.interface';
import { AuthService }                                  from '../core/auth.service';

declare const gapi: any;

@Injectable()
export class TimesheetEntryService implements ITimesheetEntryService {

  constructor(private authService: AuthService) { }

  public post(timesheet: TimesheetEntry) {

    gapi.client.declare


  }

}
