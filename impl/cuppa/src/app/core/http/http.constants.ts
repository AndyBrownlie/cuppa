import { InjectionToken }       from '@angular/core';
import { IHttpService }        from './http-service.interface';

export const HTTP_SERVICE = new InjectionToken<IHttpService>('HttpService');