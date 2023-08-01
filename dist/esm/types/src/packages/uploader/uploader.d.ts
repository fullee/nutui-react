import React from 'react';
import { UploadOptions } from './upload';
import { BasicComponent } from '@/utils/typings';
export type FileType<T> = {
    [key: string]: T;
};
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed';
export interface UploaderProps extends BasicComponent {
    url: string;
    maxCount: string | number;
    maxFileSize: number;
    defaultValue?: FileType<React.ReactNode>[];
    value?: FileType<string>[];
    previewType: 'picture' | 'list';
    fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    uploadIcon?: React.ReactNode;
    uploadLabel?: React.ReactNode;
    name: string;
    accept: string;
    disabled: boolean;
    autoUpload: boolean;
    multiple: boolean;
    timeout: number;
    data: any;
    method: string;
    xhrState: number | string;
    headers: any;
    withCredentials: boolean;
    clearInput: boolean;
    preview: boolean;
    deletable: boolean;
    capture: boolean;
    className: string;
    previewUrl?: string;
    style: React.CSSProperties;
    onStart?: (option: UploadOptions) => void;
    onDelete?: (file: FileItem, fileList: FileItem[]) => void;
    onSuccess?: (param: {
        responseText: XMLHttpRequest['responseText'];
        option: UploadOptions;
        fileList: FileItem[];
    }) => void;
    onProgress?: (param: {
        e: ProgressEvent<XMLHttpRequestEventTarget>;
        option: UploadOptions;
        percentage: string | number;
    }) => void;
    onFailure?: (param: {
        responseText: XMLHttpRequest['responseText'];
        option: UploadOptions;
        fileList: FileItem[];
    }) => void;
    onUpdate?: (fileList: FileItem[]) => void;
    onOversize?: (file: File[]) => void;
    onChange?: (param: {
        fileList: FileItem[];
        event: React.ChangeEvent<HTMLInputElement>;
    }) => void;
    beforeUpload?: (file: File[]) => Promise<File[] | boolean>;
    beforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void;
    beforeDelete?: (file: FileItem, files: FileItem[]) => boolean;
    onFileItemClick?: (file: FileItem) => void;
}
export declare class FileItem {
    status: FileItemStatus;
    message: string;
    uid: string;
    name?: string;
    url?: string;
    type?: string;
    path?: string;
    percentage: string | number;
    formData: FormData;
    responseText?: string;
}
export declare const Uploader: React.ForwardRefExoticComponent<Partial<UploaderProps> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
