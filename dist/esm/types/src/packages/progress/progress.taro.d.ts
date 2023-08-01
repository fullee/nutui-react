import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface ProgressProps extends BasicComponent {
    percent: number;
    background: string;
    color: string;
    strokeWidth: string;
    showText: boolean;
    animated: boolean;
    delay: number;
}
export declare const Progress: FunctionComponent<Partial<ProgressProps> & React.HTMLAttributes<HTMLDivElement>>;
