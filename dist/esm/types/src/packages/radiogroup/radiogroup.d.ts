import React from 'react';
import { RadioGroupOptionType } from './type';
type Position = 'left' | 'right';
type Direction = 'horizontal' | 'vertical';
export interface RadioGroupProps {
    value?: string | number;
    defaultValue?: string | number;
    labelPosition: Position;
    direction: Direction;
    disabled?: boolean;
    options: RadioGroupOptionType[];
    onChange: (value: string | number) => void;
}
export declare const RadioGroup: React.ForwardRefExoticComponent<Partial<RadioGroupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & React.RefAttributes<unknown>>;
export {};
