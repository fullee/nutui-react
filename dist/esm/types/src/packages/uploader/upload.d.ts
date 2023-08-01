export declare class UploadOptions {
    url: string;
    name: string;
    fileType?: string | undefined;
    formData?: FormData;
    sourceFile: any;
    method: string;
    xhrState: string | number;
    timeout: number;
    headers: {};
    withCredentials: boolean;
    onStart?: any;
    taroFilePath?: string;
    onProgress?: any;
    onSuccess?: any;
    onFailure?: any;
    beforeXhrUpload?: any;
}
export declare class Upload {
    options: UploadOptions;
    constructor(options: UploadOptions);
    upload(): void;
}
export declare class UploaderTaro extends Upload {
    constructor(options: UploadOptions);
    uploadTaro(uploadFile: any, env: string): void;
}
