import React, { FunctionComponent } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type RowEventType = 'row' | 'col';
export interface RowProps extends BasicComponent {
    type: string;
    justify: string;
    align: string;
    wrap: string;
    gutter: string | number;
    onClick: (e: MouseEvent<HTMLDivElement>, type: RowEventType) => void;
}
export declare const Row: FunctionComponent<Partial<RowProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
