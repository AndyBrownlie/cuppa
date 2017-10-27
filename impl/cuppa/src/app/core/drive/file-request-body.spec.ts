import { TestBed, inject } from '@angular/core/testing';

import { FileRequestBody } from './file-request-body';

describe('FolderRequestBody', () => {
  let requestBody: FileRequestBody;

    it("should convert to JSON string", () => {
        requestBody = new FileRequestBody("testFile");
        var jsonString = requestBody.toJSONString();
        expect(jsonString).toEqual("{\"name\":\"testFile\",\"mimeType\":\"application/vnd.google-apps.file\",\"kind\":\"drive#file\"}");
    });
 
});