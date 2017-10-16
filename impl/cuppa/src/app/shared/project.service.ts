import { Injectable }   from '@angular/core';
import { Project }      from './project';
import { AuthService }  from '../core/auth.service'

export interface IProjectService {
  getProjects(): Project[];
  getProjectsForMonth(month:Date): Project[];
}

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
