import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface StepProps extends BasicComponent {
    title: ReactNode;
    description: ReactNode;
    value: number;
    icon: ReactNode;
}
export declare const Step: FunctionComponent<Partial<StepProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>>;
