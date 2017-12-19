import { IRequestHeaders }          from './request-headers.interface';
import { RequestHeaders }          from './request-headers';

describe('RequestHeaders', () => {
    let requestHeaders: IRequestHeaders;

    it("should return Authorisation Property correctly", () => {
        requestHeaders = new RequestHeaders("accessToken");
        expect(requestHeaders.authorization).toEqual("Bearer accessToken");
    });

    it("should return correct Header JSON", () => {
        requestHeaders = new RequestHeaders("accessToken");
        expect(requestHeaders.toJSONString()).toEqual('{"authorization":"Bearer accessToken"}');
    });
}); 