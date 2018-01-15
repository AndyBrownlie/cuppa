import { TestBed, inject }          from '@angular/core/testing';
import { Http }                     from '@angular/http';
import { HttpService }              from './http-service';


describe('HttpService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [HttpService, Http]
        });
    });

    it('should be created', inject([HttpService], (service: HttpService) => {
        expect(service).toBeTruthy();
    })); 


});