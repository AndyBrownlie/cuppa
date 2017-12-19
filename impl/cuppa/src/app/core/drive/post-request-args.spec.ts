import { TestBed, inject }          from '@angular/core/testing';

import { PostRequestArgs }          from './post-request-args';
import { FolderRequestBody }        from './folder-request-body';
import { FileRequestBody }          from './file-request-body';
import { IRequestHeaders }          from './request-headers.interface';
import { RequestHeaders }          from './request-headers';

describe('PostRequestArgs', () => {
    let requestArgs: PostRequestArgs;
    let requestHeaders: IRequestHeaders = new RequestHeaders("accessToken");

    it("should provide JSON string arg for path (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"), requestHeaders);
        expect(requestArgs.path).toEqual("/upload/drive/v3/files");
    }); 

    it("should provide JSON string arg for method (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"), requestHeaders);
        var args = requestArgs.toArgs();
        expect(requestArgs.method).toEqual("POST");
    }); 

    it("should provide JSON string arg for body (folder)", () => {
        requestArgs = new PostRequestArgs(new FolderRequestBody("testFolder"), requestHeaders);
        var args = requestArgs.toArgs();
        expect(requestArgs.body).toEqual("{\"name\":\"testFolder\",\"mimeType\":\"application/vnd.google-apps.folder\",\"kind\":\"drive#file\"}");
    }); 

    it("should provide JSON string arg for body (file)", () => {
        requestArgs = new PostRequestArgs(new FileRequestBody("testFile"), requestHeaders);
        var args = requestArgs.toArgs();
        expect(requestArgs.body).toEqual("{\"name\":\"testFile\",\"mimeType\":\"application/vnd.google-apps.file\",\"kind\":\"drive#file\"}");
    }); 


});