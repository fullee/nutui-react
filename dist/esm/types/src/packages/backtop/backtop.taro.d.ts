import React, { FunctionComponent } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface BackTopProps extends BasicComponent {
    threshold: number;
    zIndex: number;
    duration: number;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
export declare const BackTop: FunctionComponent<Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
