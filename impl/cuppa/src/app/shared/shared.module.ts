import { NgModule, InjectionToken }                           from '@angular/core';
import { CommonModule }                                       from '@angular/common';

import { CoreModule }                                         from '../core/core.module';
import { Project }                                            from './project';
import { ProjectService, IProjectService, PROJECT_SERVICE }   from './project.service';
import { ProjectServiceStub }                                 from './project.service.stub';

@NgModule({
  imports: [CommonModule, 
    CoreModule.forRoot()],
  declarations: [ ],
  providers: [{provide: PROJECT_SERVICE, useClass: ProjectServiceStub}],
})

export class SharedModule { }
