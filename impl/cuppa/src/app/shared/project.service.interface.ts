import { Project }          from './project';

export interface IProjectService {
    getProjects(): Project[];
    getProjectsForMonth(month:Date): Project[];
  }