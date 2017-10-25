export interface IDriveService {

    insertFile(path:string, file:any);
    updateFile(path:string, file:any);
    readFile(path:string): any;
    createFolder(folderName: string);
    updateFolder(existingFolderName: string, newFolderName: string);
    deleteFolder(folderName: string);
}