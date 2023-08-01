import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type ContentPositionType = 'left' | 'center' | 'right';
export type DirectionType = 'horizontal' | 'vertical';
export interface DividerProps extends BasicComponent {
    /**
    * 内容位置
    * @default center
    */
    contentPosition: ContentPositionType
    /**
    * 水平还是垂直类型
    * @default horizontal
    */
    direction?: DirectionType
}
export declare const Divider: FunctionComponent<Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>>;
