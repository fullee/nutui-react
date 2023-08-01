import React, { ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface FileType {
    jpg: string;
    png: string;
}
export interface SignatureProps extends BasicComponent {
    /**
    * 图片格式
    * @default png
    */
    type: keyof FileType
    /**
    * 线条的宽度
    * @default 3
    */
    lineWidth: number
    /**
    * 绘图笔触颜色
    * @default #000
    */
    strokeStyle: string
    /**
    * 不支持 Canvas 情况下的展示文案
    * @default 对不起，当前浏览器不支持 Canvas，无法使用本控件！
    */
    unsupported: ReactNode
    /**
    * 点击确认按钮触发事件回调函数
    * @default -
    */
    onConfirm?: (canvas: HTMLCanvasElement, dataurl: string) => void
    /**
    * 点击重签按钮触发事件回调函数
    * @default -
    */
    onClear?: () => void
}
export declare const Signature: React.ForwardRefExoticComponent<Partial<SignatureProps> & React.RefAttributes<unknown>>;
