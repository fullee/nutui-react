import React from 'react';
import type { TouchEvent, MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type SwipeSide = 'left' | 'right';
export interface SwipeInstance {
    open: (side: SwipeSide) => void;
    close: () => void;
}
export interface SwipeProps extends BasicComponent {
    /** 标识符，可以在事件参数中获取到 */
    name?: string | number;
    /** 左侧滑动区域的内容 */
    leftAction?: React.ReactNode;
    /** 右侧滑动区域的内容 */
    rightAction?: React.ReactNode;
    /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise */
    beforeClose?: (position: string) => void;
    /** 是否禁用 */
    disabled?: boolean;
    /** 打开时触发 */
    onOpen?: ({ name, position, }: {
        name: string | number;
        position: SwipeSide;
    }) => void;
    /** 关闭时触发 */
    onClose?: ({ name, position, }: {
        name: string | number;
        position: SwipeSide;
    }) => void;
    /** 点击时触发 */
    onActionClick?: (event: MouseEvent<HTMLDivElement>, position: SwipeSide) => void;
    onTouchStart?: (event: TouchEvent<HTMLDivElement>) => void;
    onTouchEnd?: (event: TouchEvent<HTMLDivElement>) => void;
    onTouchMove?: (event: TouchEvent<HTMLDivElement>) => void;
}
export declare const Swipe: React.ForwardRefExoticComponent<Partial<SwipeProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onTouchEnd" | "onTouchMove" | "onTouchStart"> & React.RefAttributes<SwipeInstance>>;
