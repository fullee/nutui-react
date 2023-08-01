import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface NoticeBarProps extends BasicComponent {
    /**
    * 滚动的方向，可选 horizontal、vertical
    * @default horizontal
    */
    direction: string
    list: any;
    duration: number;
    height: number;
    /**
    * 提示的信息
    * @default -
    */
    content: string
    /**
    * 是否启用关闭模式
    * @default false
    */
    closeable: boolean
    /**
    * 是否开启文本换行
    * @default false
    */
    wrap: boolean
    /**
    * 左边的 icon，closeable 模式下默认为空
    * @default -
    */
    leftIcon: ReactNode
    /**
    * 右边的 icon，在 closeable 模式下默认为 <Close />
    * @default -
    */
    rightIcon: ReactNode
    /**
    * 延时多少秒
    * @default 1
    */
    delay: string | number
    /**
    * 是否可以滚动
    * @default true
    */
    scrollable: boolean | null
    /**
    * 滚动速率 (px/s)
    * @default 50
    */
    speed: number
    close?: (event: any) => void;
    click?: (event: any) => void;
    /**
    * 关闭通知栏时触发
    * @default -
    */
    onClose?: (event: any) => void
    /**
    * 外层点击事件回调
    * @default -
    */
    onClick?: (event: any) => void
    /**
    * 垂直滚动多条数据时，点击当前展示的信息时触发
    * @default -
    */
    onItemClick?: (event: any, value: any) => void
}
export declare const NoticeBar: FunctionComponent<Partial<NoticeBarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
