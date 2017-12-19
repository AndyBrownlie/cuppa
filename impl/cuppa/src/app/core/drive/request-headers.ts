import { IRequestHeaders }      from './request-headers.interface';

export class RequestHeaders implements IRequestHeaders{

    constructor(authorization: string) {
        this.authorization = "Bearer " + authorization;
    }

    public authorization: string;

    public toJSONString(): string {
        return JSON.stringify(this);
    }
}
