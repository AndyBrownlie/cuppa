import { Injectable }   from '@angular/core';
import { Project }      from './project';

export interface IProjectService {
  getProjects(): Project[];
}

@Injectable()
export class ProjectService implements IProjectService {

  constructor() { }

  public getProjects(): Project[] {
    var projects: Project[];
    return projects;
  }

}
