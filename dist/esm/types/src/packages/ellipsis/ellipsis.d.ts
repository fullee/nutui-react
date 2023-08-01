import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type EllipsisDirection = 'start' | 'end' | 'middle';
export interface EllipsisProps extends BasicComponent {
    content: string;
    direction: EllipsisDirection;
    rows: number | string;
    expandText: string;
    collapseText: string;
    symbol: string;
    lineHeight: number | string;
    onClick: () => void;
    onChange: (type: string) => void;
}
export declare const Ellipsis: FunctionComponent<Partial<EllipsisProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>>;
