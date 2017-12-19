import { IRequestHeaders }   from './request-headers.interface';

export interface IRequestArgs {
    path: string;
    method: string;
    params: string; //object
    headers: IRequestHeaders;
    body: string;
}
