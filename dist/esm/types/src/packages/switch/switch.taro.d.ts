import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface SwitchProps extends BasicComponent {
    checked: boolean;
    defaultChecked: boolean;
    disabled: boolean;
    activeText: string;
    inactiveText: string;
    onChange: (val: boolean, event: React.MouseEvent) => void;
}
export declare const Switch: FunctionComponent<Partial<SwitchProps>>;
