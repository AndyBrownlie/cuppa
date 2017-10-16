import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { CoreModule }           from '../core/core.module';

import { Project }            from './project';
import { ProjectService }     from './project.service';
import { ProjectServiceStub }     from './project.service.stub';
@NgModule({
  imports: [CommonModule, 
    CoreModule.forRoot()],
  declarations: [ ],
  providers: [{provide: ProjectService, useClass: ProjectServiceStub}],
})
export class SharedModule { }
