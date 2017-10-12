import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { Project }            from './project';
import { ProjectService }     from './project.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ ],
  providers: [ProjectService],
})
export class SharedModule { }
