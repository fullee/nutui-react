import React, { FunctionComponent, ChangeEvent, FocusEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface InputNumberProps extends BasicComponent {
    disabled: boolean;
    min: string | number;
    max: string | number;
    readOnly: boolean;
    value: string | number;
    defaultValue: string | number;
    allowEmpty: boolean;
    step: string | number;
    digits: string | number;
    async: boolean;
    formatter?: (displayValue: string | number) => string;
    onPlus: (e: MouseEvent) => void;
    onMinus: (e: MouseEvent) => void;
    onOverlimit: (e: MouseEvent) => void;
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (param: string | number, e: MouseEvent | ChangeEvent<HTMLInputElement>) => void;
}
export declare const InputNumber: FunctionComponent<Partial<InputNumberProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'>>;
