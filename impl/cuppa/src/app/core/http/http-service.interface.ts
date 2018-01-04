import { RequestOptionsArgs }   from "@angular/http";
import { Observable }           from "rxjs";
import { Injectable }           from "@angular/core";

export interface IHttpService {

    get(url: string, options?: RequestOptionsArgs): Observable<any>;

    post(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any>;

    put(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any>;

    delete(url: string, options?: RequestOptionsArgs): Observable<any>;

    
}