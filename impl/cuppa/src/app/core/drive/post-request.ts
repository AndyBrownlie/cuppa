import { IRequest }     from './request.interface';

export class PostRequest implements IRequest {
    path:string;
    method: string;
}
