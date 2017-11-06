import { TestBed, inject } from '@angular/core/testing';

import { PostRequestArgs } from './post-request-args';

describe('PostRequestArgs', () => {
  let requestArgs: PostRequestArgs;

    it("should convert to JSON string", () => {
        requestArgs = new PostRequestArgs("testFolder");
        var jsonString = requestArgs.toJSONString();
        expect(jsonString).toEqual("{\"name\":\"testFolder\",\"mimeType\":\"application/vnd.google-apps.folder\",\"kind\":\"drive#file\"}");
    }); 
 
});