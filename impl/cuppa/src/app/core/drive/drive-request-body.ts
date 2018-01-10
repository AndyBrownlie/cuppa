import { IDriveRequestBody } from './drive-request-body.interface';

export abstract class DriveRequestBody implements IDriveRequestBody {

    constructor(public name: string, public mimeType: string) {}

    public kind: string = "drive#file";

    public toJSONString(): string {
        return JSON.stringify(this);
    }
}
