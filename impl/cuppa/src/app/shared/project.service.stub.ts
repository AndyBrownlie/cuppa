import { Injectable }           from '@angular/core';
import { IProjectService }      from './project.service';
import { ProjectMockProvider }  from '../mocks/project.mock.provider';
import { Project }              from './project';

@Injectable()
export class ProjectServiceStub implements IProjectService {

  constructor() { }

  public getProjects(): Project[] {
    return ProjectMockProvider.ValidProjects();
  }
  
}
