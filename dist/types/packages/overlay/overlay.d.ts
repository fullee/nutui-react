import React, { FunctionComponent, MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface OverlayProps extends BasicComponent {
    /**
    * 遮罩层级
    * @default 2000
    */
    zIndex: number
    /**
    * 动画时长，单位毫秒
    * @default 300
    */
    duration: number
    /**
    * 是否点击遮罩关闭
    * @default true
    */
    closeOnOverlayClick: boolean
    /**
    * 当前组件是否显示
    * @default false
    */
    visible: boolean
    /**
    * 背景是否锁定
    * @default true
    */
    lockScroll: boolean
    /**
    * 点击时触发
    * @default -
    */
    onClick: (event: MouseEvent) => void
    /**
    * 完全展示后触发
    * @default -
    */
    afterShow: () => void
    /**
    * 完全关闭后触发
    * @default -
    */
    afterClose: () => void
}
export declare const defaultOverlayProps: OverlayProps;
export declare const Overlay: FunctionComponent<Partial<OverlayProps> & React.HTMLAttributes<HTMLDivElement>>;
