import * as React from 'react';
import { BasicComponent } from '../../utils/typings';
export type ToastPositionType = 'top' | 'bottom' | 'center';
export type ToastIconType = 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode;
export interface ToastProps extends BasicComponent {
    id?: string;
    /**
    * 展示时长（秒）<br>值为 0 时，toast 不会自动消失
    * @default 2
    */
    duration?: number
    /**
    * toast展示位置
    * @default center
    */
    position?: ToastPositionType
    /**
    * 标题
    * @default -
    */
    title?: string
    /**
    * 是否在点击遮罩层后关闭提示
    * @default false
    */
    closeOnOverlayClick?: boolean
    /**
    * 背景是否锁定
    * @default false
    */
    lockScroll?: boolean
    /**
    * 文案尺寸，三选一
    * @default base
    */
    size?: string | number
    /**
    * 自定义图标
    * @default -
    */
    icon?: ToastIconType
    /**
    * Toast文本内容
    * @default -
    */
    content?: React.ReactNode
    /**
    * 关闭时触发的事件
    * @default () => void
    */
    onClose?: () => void
    /**
    * 自定义内容区类名
    * @default -
    */
    contentClassName?: string
    /**
    * 自定义内容区样式
    * @default -
    */
    contentStyle?: React.CSSProperties
}
declare function show(option: ToastProps | string): void;
declare function config(config: Pick<ToastProps, 'duration' | 'position' | 'closeOnOverlayClick' | 'lockScroll'>): void;
declare const _default: {
    show: typeof show;
    config: typeof config;
    clear(): void;
};
export default _default;
