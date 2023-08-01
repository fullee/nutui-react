import React from 'react';
import { RadioGroupOptionType } from '@/packages/radiogroup/type';
export type CheckboxLabelPosition = 'left' | 'right';
export type CheckboxDirection = 'horizontal' | 'vertical';
export interface CheckboxGroupProps {
    disabled?: boolean;
    value?: string[];
    defaultValue?: string[];
    max: number | undefined;
    labelPosition: CheckboxLabelPosition;
    direction: CheckboxDirection;
    options: RadioGroupOptionType[];
    onChange: (value: string[]) => void;
}
export declare const CheckboxGroup: React.ForwardRefExoticComponent<Partial<CheckboxGroupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & React.RefAttributes<unknown>>;
