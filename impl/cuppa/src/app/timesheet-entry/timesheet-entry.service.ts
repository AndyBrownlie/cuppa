import { Injectable, Inject }               from '@angular/core';
import { TimesheetEntry }           from './timesheet-entry';
import { ITimesheetEntryService }   from './timesheet-entry.service.interface';
import { IDriveService }            from '../core/drive/drive.service.interface';
import { DRIVE_SERVICE }            from '../core/drive/drive.constants';
import { DriveService }             from '../core/drive/drive.service';

declare const gapi: any;

@Injectable()
export class TimesheetEntryService implements ITimesheetEntryService {

  constructor(@Inject(DRIVE_SERVICE) private driveService: IDriveService) { }

  public post(timesheet: TimesheetEntry) {
    this.driveService.createFolder("testFolderfromCode");
    


  }

}
