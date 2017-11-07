import { TestBed, inject }          from '@angular/core/testing';

import { PostRequestArgs }          from './post-request-args';
import { FolderRequestBody }        from './folder-request-body';
import { FileRequestBody }          from './file-request-body';

describe('PostRequestArgs', () => {
  let requestArgs: PostRequestArgs;

    it("should provide JSON string arg for path (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"));
        var args = requestArgs.toArgs();
        expect(args[0]).toEqual("/upload/drive/v3/files");
    }); 

    it("should provide JSON string arg for method (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"));
        var args = requestArgs.toArgs();
        expect(args[1]).toEqual("POST");
    }); 

    it("should provide JSON string arg for body (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"));
        var args = requestArgs.toArgs();
        expect(args[4]).toEqual("{\"name\":\"testFolder\",\"mimeType\":\"application/vnd.google-apps.folder\",\"kind\":\"drive#file\"}");
    }); 

    it("should provide JSON string arg for body (file)", () => {
        requestArgs = new PostRequestArgs(new FileRequestBody("testFile"));
        var args = requestArgs.toArgs();
        expect(args[4]).toEqual("{\"name\":\"testFile\",\"mimeType\":\"application/vnd.google-apps.file\",\"kind\":\"drive#file\"}");
    }); 


});