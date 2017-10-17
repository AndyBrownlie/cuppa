import { Injectable }       from '@angular/core';

import { Project }          from './project';
import { IProjectService }  from './project.service.interface'
import { AuthService }      from '../core/auth.service'

@Injectable()
export class ProjectService implements IProjectService {

  constructor(private authService: AuthService) { }

  public getProjects(): Project[] {
    var projects: Project[];
    return projects;
  }

  public getProjectsForMonth(month:Date) : Project[] {
    var projects: Project[];
    return projects;
  }

}
