import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface DragProps extends BasicComponent {
    /**
    * 是否开启自动吸边
    * @default false
    */
    attract: boolean
    /**
    * 拖拽元素的拖拽方向限制
    * @default all
    */
    direction: 'x' | 'y' | 'lock' | undefined
    /**
    * 拖拽元素的拖拽边界
    * @default {top: 0, left: 0, right: 0, bottom: 0}
    */
    boundary: {
        top: number;
        left: number;
        right: number;
        bottom: number;
    }
}
export declare const Drag: FunctionComponent<Partial<DragProps> & React.HTMLAttributes<HTMLDivElement>>;
