import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface RateProps extends BasicComponent {
    count: number;
    value: number;
    defaultValue: number;
    min: number;
    checkedIcon: React.ReactNode;
    uncheckedIcon: React.ReactNode;
    disabled: boolean;
    readOnly: boolean;
    allowHalf: boolean;
    onChange: (value: number) => void;
}
export declare const Rate: FunctionComponent<Partial<RateProps>>;
