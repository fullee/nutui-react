import React, { FunctionComponent } from 'react';
import { PopupProps } from '../../packages/popup/popup';
export type PopoverLocation = 'bottom' | 'top' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
export interface List {
    key?: string;
    name: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}
export interface PopoverProps extends PopupProps {
    /**
    * 选项列表
    * @default []
    */
    list: List[]
    /**
    * 弹出位置，里面具体的参数值可以参考上面的位置自定义例子
    * @default bottom
    */
    location: PopoverLocation | string
    /**
    * 是否展示气泡弹出层
    * @default false
    */
    visible: boolean
    /**
    * 出现位置的偏移量
    * @default [0, 12]
    */
    offset: string[] | number[]
    /**
    * 自定义目标元素 id
    * @default -
    */
    targetId: string
    /**
    * 是否显示小箭头
    * @default true
    */
    showArrow: boolean
    /**
    * 是否在点击外部元素后关闭菜单
    * @default true
    */
    closeOnOutsideClick: boolean
    /**
    * 是否在点击选项后关闭
    * @default true
    */
    closeOnActionClick: boolean
    children?: React.ReactNode;
    /**
    * 点击切换 popover 展示状态
    * @default () => {}
    */
    onClick: () => void
    /**
    * 点击菜单时触发
    * @default () => {}
    */
    onOpen: () => void
    /**
    * 关闭菜单时触发
    * @default () => {}
    */
    onClose: () => void
    /**
    * 点击选项时触发
    * @default (item, index) => {}
    */
    onSelect: (item: List, index: number) => void
}
export declare const Popover: FunctionComponent<Partial<PopoverProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>>;
