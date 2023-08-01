import React, { FunctionComponent } from 'react';
import RadioGroup from '@/packages/radiogroup/index.taro';
import { BasicComponent } from '@/utils/typings';
export type RadioShape = 'button' | 'round';
export type RadioPosition = 'right' | 'left';
export interface RadioProps extends BasicComponent {
    disabled: boolean;
    checked: boolean;
    defaultChecked: boolean;
    shape: RadioShape;
    labelPosition: RadioPosition;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    value: string | number;
    onChange: (checked: boolean) => void;
}
export declare const Radio: FunctionComponent<Partial<RadioProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>> & {
    Group: typeof RadioGroup;
};
