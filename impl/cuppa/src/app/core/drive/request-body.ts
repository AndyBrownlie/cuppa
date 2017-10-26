import { IRequestBody } from './request-body.interface';


'application/vnd.google-apps.folder'

export abstract class RequestBody implements IRequestBody {

    constructor(public name: string, public mimeType: string) {}

    public kind: string = "drive#file";

    public toJSONString(): string {
        return JSON.stringify(this);
    }
}
