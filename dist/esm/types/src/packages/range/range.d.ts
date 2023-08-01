import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export type RangeValue = number | number[];
export interface RangeProps extends BasicComponent {
    value: RangeValue;
    defaultValue: RangeValue;
    range: boolean;
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    minDescription: ReactNode;
    maxDescription: ReactNode;
    button: ReactNode;
    vertical: boolean;
    marks: Record<string, unknown>;
    currentDescription: ((value: RangeValue) => ReactNode) | null;
    onChange: (value: RangeValue) => void;
    onStart: () => void;
    onEnd: (value: RangeValue) => void;
}
export declare const Range: FunctionComponent<Partial<RangeProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange' | 'defaultValue'>>;
