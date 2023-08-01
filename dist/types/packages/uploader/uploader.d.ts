import React from 'react';
import { UploadOptions } from './upload';
import { BasicComponent } from '../../utils/typings';
export type FileType<T> = {
    [key: string]: T;
};
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed';
export interface UploaderProps extends BasicComponent {
    /**
    * 上传服务器的接口地址
    * @default -
    */
    url: string
    /**
    * 文件上传数量限制
    * @default 1
    */
    maxCount: string | number
    /**
    * 可以设定最大上传文件的大小（字节）
    * @default Number.MAX_VALUE
    */
    maxFileSize: number
    /**
    * 默认已经上传的文件列表
    * @default []
    */
    defaultValue?: FileType<React.ReactNode>[]
    /**
    * 已经上传的文件列表
    * @default []
    */
    value?: FileType<string>[]
    /**
    * 上传列表的内建样式，支持两种基本样式 picture、list
    * @default picture
    */
    previewType: 'picture' | 'list'
    /**
    * 图片填充模式
    * @default cover
    */
    fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
    /**
    * 上传区域<a href="#/zh-CN/icon">图标名称</a>
    * @default -
    */
    uploadIcon?: React.ReactNode
    /**
    * 上传区域图片下方文字
    * @default -
    */
    uploadLabel?: React.ReactNode
    /**
    * input 标签 name 的名称，发到后台的文件参数名
    * @default file
    */
    name: string
    /**
    * 允许上传的文件类型，[详细说明]("https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B")
    * @default *
    */
    accept: string
    /**
    * 是否禁用文件上传
    * @default false
    */
    disabled: boolean
    /**
    * 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传
    * @default true
    */
    autoUpload: boolean
    /**
    * 是否支持文件多选
    * @default false
    */
    multiple: boolean
    /**
    * 超时时间，单位为毫秒
    * @default 1000 * 30
    */
    timeout: number
    /**
    * 附加上传的信息 formData
    * @default {}
    */
    data: any
    /**
    * 上传请求的 http method
    * @default post
    */
    method: string
    /**
    * 接口响应的成功状态（status）值
    * @default 200
    */
    xhrState: number | string
    /**
    * 设置上传的请求头部
    * @default {}
    */
    headers: any
    /**
    * 支持发送 cookie 凭证信息
    * @default false
    */
    withCredentials: boolean
    /**
    * 是否需要清空input内容，设为true支持重复选择上传同一个文件
    * @default true
    */
    clearInput: boolean
    /**
    * 是否上传成功后展示预览图
    * @default true
    */
    preview: boolean
    /**
    * 是否展示删除按钮
    * @default true
    */
    deletable: boolean
    /**
    * 图片[选取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture")，直接调起摄像头
    * @default false
    */
    capture: boolean
    className: string;
    /**
    * 当上传非图片('image')格式的默认图片地址
    * @default -
    */
    previewUrl?: string
    style: React.CSSProperties;
    /**
    * 文件上传开始
    * @default -
    */
    onStart?: (option: UploadOptions) => void
    /**
    * 文件删除之前的状态
    * @default -
    */
    onDelete?: (file: FileItem, fileList: FileItem[]) => void
    /**
    * 上传成功
    * @default -
    */
    onSuccess?: (param: {
        responseText: XMLHttpRequest['responseText'];
        option: UploadOptions;
        fileList: FileItem[];
    }) => void
    /**
    * 文件上传的进度
    * @default -
    */
    onProgress?: (param: {
        e: ProgressEvent<XMLHttpRequestEventTarget>;
        option: UploadOptions;
        percentage: string | number;
    }) => void
    /**
    * 上传失败
    * @default -
    */
    onFailure?: (param: {
        responseText: XMLHttpRequest['responseText'];
        option: UploadOptions;
        fileList: FileItem[];
    }) => void
    onUpdate?: (fileList: FileItem[]) => void;
    /**
    * 文件大小超过限制时触发
    * @default -
    */
    onOversize?: (file: File[]) => void
    /**
    * 上传文件改变时的状态
    * @default -
    */
    onChange?: (param: {
        fileList: FileItem[];
        event: React.ChangeEvent<HTMLInputElement>;
    }) => void
    /**
    * 上传前的函数需要返回一个Promise对象
    * @default -
    */
    beforeUpload?: (file: File[]) => Promise<File[] | boolean>
    /**
    * 执行 XHR 上传时，自定义方式
    * @default -
    */
    beforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void
    /**
    * 除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除
    * @default -
    */
    beforeDelete?: (file: FileItem, files: FileItem[]) => boolean
    /**
    * 文件上传成功后点击触发
    * @default -
    */
    onFileItemClick?: (file: FileItem) => void
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
