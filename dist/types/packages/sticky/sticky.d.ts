import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface StickyProps extends BasicComponent {
    /**
    * 容器的 ref
    * @default -
    */
    container: React.RefObject<HTMLElement>
    /**
    * 吸附位置
    * @default top
    */
    position: 'top' | 'bottom'
    /**
    * 距离，当 position 为 top 时，设置的是 top
    * @default 0
    */
    threshold: number
    /**
    * 吸附时的层级
    * @default 2000
    */
    zIndex: number
    /**
    * 吸附状态改变时触发
    * @default -
    */
    onChange: (val: boolean) => void
}
export declare const Sticky: FunctionComponent<Partial<StickyProps>>;
