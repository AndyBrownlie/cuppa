import { TestBed, inject } from '@angular/core/testing';

import { FileRequestBody } from './file-request-body';

describe('FileRequestBody', () => {
  let requestBody: FileRequestBody;

    it("should convert to JSON string", () => {
        requestBody = new FileRequestBody("testFile");
        var jsonString = requestBody.toJSONString();
        expect(requestBody.toJSONString()).toEqual("{\"name\":\"testFile\",\"mimeType\":\"application/vnd.google-apps.file\",\"kind\":\"drive#file\"}");
    });
 
});