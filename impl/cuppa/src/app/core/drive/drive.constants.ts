import { InjectionToken }       from '@angular/core';
import { IDriveService }        from './drive.service.interface';

export const DRIVE_SERVICE = new InjectionToken<IDriveService>('DriveService');