import { Headers }          from '@angular/http';
import { DriveRequestHeaders }   from './drive-request-headers';

describe('RequestHeaders', () => {
    let requestHeaders: Headers;

    it("should return authorization Header value", () => {
        requestHeaders = new DriveRequestHeaders("accessToken");
        expect(requestHeaders.get("authorization")).toEqual("Bearer accessToken");
    });
}); 