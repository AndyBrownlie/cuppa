import { TestBed, inject }          from '@angular/core/testing';

import { PostRequestArgs }          from './post-request-args';
import { FolderRequestBody }        from './folder-request-body';
import { FileRequestBody }          from './file-request-body';
import { DriveRequestHeaders }      from './drive-request-headers';

describe('PostRequestArgs', () => {
    let requestArgs: PostRequestArgs;
    let requestHeaders: DriveRequestHeaders = new DriveRequestHeaders("accessToken");

    it("should provide JSON string arg for path (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"), requestHeaders);
        expect(requestArgs.url).toEqual("/upload/drive/v3/files");
    }); 

    it("should provide JSON string arg for method (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"), requestHeaders);
        expect(requestArgs.method).toEqual("POST");
    }); 

    it("should provide JSON string arg for body (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"), requestHeaders);
        expect(requestArgs.body).toEqual("{\"name\":\"testFolder\",\"mimeType\":\"application/vnd.google-apps.folder\",\"kind\":\"drive#file\"}");
    }); 

    it("should provide JSON string arg for body (file)", () => {
        requestArgs = new PostRequestArgs(new FileRequestBody("testFile"), requestHeaders);
        expect(requestArgs.body).toEqual("{\"name\":\"testFile\",\"mimeType\":\"application/vnd.google-apps.file\",\"kind\":\"drive#file\"}");
    }); 


});