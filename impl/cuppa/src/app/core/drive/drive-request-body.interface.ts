export interface IDriveRequestBody {
    kind: string;
    mimeType: string;
    name: string;

    toJSONString(): string
}
