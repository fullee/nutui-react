import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface Color {
    [key: string]: string;
}
export interface CircleProgressProps extends BasicComponent {
    percent: string | number;
    strokeWidth?: string | number;
    radius?: number | string;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
    color?: Record<string, string> | string;
    background?: string;
    clockwise?: boolean;
}
export declare const CircleProgress: FunctionComponent<CircleProgressProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>>;
