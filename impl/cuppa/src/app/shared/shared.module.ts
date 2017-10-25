import { NgModule, InjectionToken }             from '@angular/core';
import { CommonModule }                         from '@angular/common';

import { CoreModule }                           from '../core/core.module';
import { Project }                              from './project';
import { ProjectService }                       from './project.service';
import { IProjectService }                      from './project.service.interface';
import { PROJECT_SERVICE }                      from './project.constants';
import { ProjectServiceStub }                   from './project.service.stub';


@NgModule({
  imports: [
    CommonModule, 
    CoreModule.forRoot()
  ],
  declarations: [ ],
  providers: [
    {provide: PROJECT_SERVICE, useClass: ProjectServiceStub}
  ],
})

export class SharedModule { }
