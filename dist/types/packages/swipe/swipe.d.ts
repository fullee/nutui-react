import React from 'react';
import type { TouchEvent, MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type SwipeSide = 'left' | 'right';
export interface SwipeInstance {
    open: (side: SwipeSide) => void;
    close: () => void;
}
export interface SwipeProps extends BasicComponent {
    /**
    * 标识符，可以在事件参数中获取到
    * @default -
    */
    name?: string | number;
    /**
    * 左侧滑动区域的内容
    * @default -
    */
    leftAction?: React.ReactNode;
    /**
    * 右侧滑动区域的内容
    * @default -
    */
    rightAction?: React.ReactNode;
    /**
    * 关闭前的回调函数，返回滑动区域所在方向 position
    * @default -
    */
    beforeClose?: (position: string) => void;
    /**
    * 是否禁用滑动
    * @default false
    */
    disabled?: boolean;
    /**
    * 打开单元格侧边栏
    * @default -
    */
    onOpen?: ({ name, position, }: {
        name: string | number;
        position: SwipeSide;
    }) => void;
    /**
    * 收起单元格侧边栏
    * @default -
    */
    onClose?: ({ name, position, }: {
        name: string | number;
        position: SwipeSide;
    }) => void;
    /**
    * 点击左侧或者右侧时触发
    * @default -
    */
    onActionClick?: (event: MouseEvent<HTMLDivElement>, position: SwipeSide) => void;
    /**
    * onTouchStart
    * @default -
    */
    onTouchStart?: (event: TouchEvent<HTMLDivElement>) => void
    /**
    * onTouchEnd
    * @default -
    */
    onTouchEnd?: (event: TouchEvent<HTMLDivElement>) => void
    /**
    * onTouchMove
    * @default -
    */
    onTouchMove?: (event: TouchEvent<HTMLDivElement>) => void
}
export declare const Swipe: React.ForwardRefExoticComponent<Partial<SwipeProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onTouchEnd" | "onTouchMove" | "onTouchStart"> & React.RefAttributes<SwipeInstance>>;
