import { Injectable }   from '@angular/core';
import { Project }      from './project';

@Injectable()
export class ProjectService {

  constructor() { }

  private getProjects(): Project[] {
    var projects: Project[];
    var project = new Project();
    project.name = "Neueda | DAERA";
    projects[0] = project;
    project = new Project();
    project.name = "Neueda | LPS";
    projects[1] = project;
    return projects;
  }

}
