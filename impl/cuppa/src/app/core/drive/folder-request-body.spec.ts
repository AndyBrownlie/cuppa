import { TestBed, inject } from '@angular/core/testing';

import { FolderRequestBody } from './folder-request-body';

describe('FolderRequestBody', () => {
  let requestBody: FolderRequestBody;

    it("should convert to JSON string", () => {
        //requestBody = new FolderRequestBody("testFolder");
        var jsonString = FolderRequestBody.toJSONString("testFolder");
        expect(jsonString).toEqual("{\"name\":\"testFolder\",\"mimeType\":\"application/vnd.google-apps.folder\",\"kind\":\"drive#file\"}");
    });
 
});