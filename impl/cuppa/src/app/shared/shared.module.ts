import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { Project }            from './project';
import { ProjectService }     from './project.service';
import { ProjectServiceStub }     from './project.service.stub';
@NgModule({
  imports: [CommonModule],
  declarations: [ ],
  providers: [{provide: ProjectService, useClass: ProjectServiceStub}],
})
export class SharedModule { }
