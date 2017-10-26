import { TestBed, inject } from '@angular/core/testing';

import { FolderRequestBody } from './folder-request-body';

describe('FolderRequestBody', () => {
  let requestBody: FolderRequestBody;

    it("should convert to JSON string", () => {
        requestBody = new FolderRequestBody("testFolder");
        var jsonString = requestBody.toJSONString();
        expect(jsonString).toEqual("{'kind': ''");
    });
 
});