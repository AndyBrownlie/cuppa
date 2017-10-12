import { Injectable }                       from '@angular/core';
import { Project }                          from '../shared/project';    
import { ValidProject1, ValidProject2 }     from './project.mock.model';

@Injectable()
export class ProjectMockProvider {

    public static ValidProjects(): Project[] {
        

        return [ValidProject1, ValidProject2];
    }

    public static NoProjects(): Project[] {
        return [];
    }
}
