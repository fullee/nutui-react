import React from 'react';
import { PickerOption } from './types';
interface PickerPanelProps {
    keyIndex?: number;
    defaultValue?: string | number;
    options?: PickerOption[];
    threeDimensional: boolean;
    duration: number | string;
    itemShow: boolean;
    chooseItem?: (val: PickerOption, idx: number) => void;
}
declare const PickerPanel: React.ForwardRefExoticComponent<Partial<PickerPanelProps> & React.RefAttributes<{
    stopMomentum: () => void;
    moving: boolean;
}>>;
export default PickerPanel;
