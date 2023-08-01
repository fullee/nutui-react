import React from 'react';
import Taro from '@tarojs/taro';
import { UploadOptions } from './upload';
import { BasicComponent } from '@/utils/typings';
export type FileType<T> = {
    [key: string]: T;
};
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed';
/** 图片的尺寸 */
interface sizeType {
    /** 原图 */
    original: string;
    /** compressed */
    compressed: string;
}
/** 图片的来源 */
interface sourceType {
    /** 从相册选图 */
    album: string;
    /** 使用相机 */
    camera: string;
}
/** 视频的来源 */
interface mediaType {
    /** 只能拍摄图片或从相册选择图片 */
    image: string;
    /** 只能拍摄视频或从相册选择视频 */
    video: string;
}
export interface UploaderProps extends BasicComponent {
    url: string;
    maxCount: string | number;
    sizeType: (keyof sizeType)[];
    sourceType: (keyof sourceType)[];
    mediaType: (keyof mediaType)[];
    camera: string;
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
    preview: boolean;
    deletable: boolean;
    className: string;
    previewUrl?: string;
    maxDuration: number;
    style: React.CSSProperties;
    onStart?: (option: UploadOptions) => void;
    onDelete?: (file: FileItem, fileList: FileType<React.ReactNode>[]) => void;
    onSuccess?: (param: {
        responseText: XMLHttpRequest['responseText'];
        option: UploadOptions;
        fileList: FileType<React.ReactNode>[];
    }) => void;
    onProgress?: (param: {
        e: ProgressEvent<XMLHttpRequestEventTarget>;
        option: UploadOptions;
        percentage: React.ReactNode;
    }) => void;
    onFailure?: (param: {
        responseText: XMLHttpRequest['responseText'];
        option: UploadOptions;
        fileList: FileType<React.ReactNode>[];
    }) => void;
    onUpdate?: (fileList: FileType<React.ReactNode>[]) => void;
    onOversize?: (files: Taro.chooseImage.ImageFile[] | Taro.chooseMedia.ChooseMedia[] | any) => void;
    onChange?: (param: {
        fileList: FileType<React.ReactNode>[];
    }) => void;
    beforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void;
    beforeDelete?: (file: FileItem, files: FileType<React.ReactNode>[]) => boolean;
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
    formData: any;
}
export declare const Uploader: React.ForwardRefExoticComponent<Partial<UploaderProps> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export {};
