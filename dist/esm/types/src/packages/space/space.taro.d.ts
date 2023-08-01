import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface SpaceProps extends BasicComponent {
    direction: 'horizontal' | 'vertical';
    align: 'start' | 'end' | 'center' | 'baseline';
    justify: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    wrap: boolean;
}
export declare const Space: FunctionComponent<Partial<SpaceProps> & React.HTMLAttributes<HTMLDivElement>>;
