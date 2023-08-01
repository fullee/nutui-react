import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface StepsProps extends BasicComponent {
    value: number;
    direction: string;
    dot: boolean;
    onStepClick: (index: number) => void;
}
export declare const Steps: FunctionComponent<Partial<StepsProps> & React.HTMLAttributes<HTMLDivElement>>;
