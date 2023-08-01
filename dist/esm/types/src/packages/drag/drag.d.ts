import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface DragProps extends BasicComponent {
    attract: boolean;
    direction: 'x' | 'y' | 'lock' | undefined;
    boundary: {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
}
export declare const Drag: FunctionComponent<Partial<DragProps> & React.HTMLAttributes<HTMLDivElement>>;
