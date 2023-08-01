import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type ContentPositionType = 'left' | 'center' | 'right';
export type DirectionType = 'horizontal' | 'vertical';
export interface DividerProps extends BasicComponent {
    contentPosition: ContentPositionType;
    direction?: DirectionType;
}
export declare const Divider: FunctionComponent<Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>>;
