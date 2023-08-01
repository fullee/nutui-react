/// <reference types="react" />
import '@/packages/uploader/demo.scss';
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed';
export type FileType<T> = {
    [key: string]: T;
};
export declare class FileItem {
    status: FileItemStatus;
    message: string;
    uid: string;
    name?: string;
    url?: string;
    path?: string;
    type?: string;
    percentage: string | number;
    formData: FormData;
}
declare const UploaderDemo: () => JSX.Element;
export default UploaderDemo;
