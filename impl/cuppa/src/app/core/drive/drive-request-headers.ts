import { Headers }      from '@angular/http';

export class DriveRequestHeaders extends Headers{

    constructor(authorization: string) {
        super({'Content-Type': 'application/json', 'authorization':  "Bearer " + authorization});
    }

    public authorization: string;

    public toJSONString(): string {
        return JSON.stringify(this);
    }
}
