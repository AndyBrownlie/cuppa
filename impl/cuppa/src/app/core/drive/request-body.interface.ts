export interface IRequestBody {
    kind: string;
    mimeType: string;
    name: string;

    toJSONString(): string
}
