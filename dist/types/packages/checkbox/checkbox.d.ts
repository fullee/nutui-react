import React, { FunctionComponent } from 'react';
import CheckboxGroup from '../../packages/checkboxgroup';
import { BasicComponent } from '../../utils/typings';
export interface CheckboxProps extends BasicComponent {
    checked: boolean;
    disabled: boolean;
    defaultChecked: boolean;
    labelPosition: 'left' | 'right';
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    indeterminateIcon: React.ReactNode;
    value: string | number;
    indeterminate: boolean;
    label: string | number;
    onChange: (value: boolean) => void;
}
export declare const Checkbox: FunctionComponent<Partial<CheckboxProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>> & {
    Group: typeof CheckboxGroup;
};
