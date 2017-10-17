import { Injectable }           from '@angular/core';
import { IProjectService }      from './project.service.interface';
import { ProjectMockProvider }  from '../mocks/project.mock.provider';
import { Project }              from './project';

@Injectable()
export class ProjectServiceStub implements IProjectService {

  constructor() { }

  public getProjects(): Project[] {
    var projects = ProjectMockProvider.ValidProjects();
    return projects;
  }
  
  public getProjectsForMonth(month:Date): Project[] {
    var projects = ProjectMockProvider.ValidProjects();
    return projects;
  }

}
