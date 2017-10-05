import { TestBed, inject } from '@angular/core/testing';

import { TimesheetEntryService } from './timesheet-entry.service';

describe('TimesheetEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimesheetEntryService]
    });
  });

  it('should be created', inject([TimesheetEntryService], (service: TimesheetEntryService) => {
    expect(service).toBeTruthy();
  }));
});
