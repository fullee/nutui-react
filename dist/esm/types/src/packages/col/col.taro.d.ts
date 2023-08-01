import React, { FunctionComponent } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type ColEventType = 'row' | 'col';
export interface ColProps extends BasicComponent {
    span: string | number;
    offset: string | number;
    gutter: string | number;
    onClick: (e: MouseEvent<HTMLDivElement>, type: ColEventType) => void;
}
export declare const Col: FunctionComponent<Partial<ColProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
