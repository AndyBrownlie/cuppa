import { InjectionToken }       from '@angular/core';
import { IProjectService }      from './project.service.interface';

export const PROJECT_SERVICE = new InjectionToken<IProjectService>('ProjectService');