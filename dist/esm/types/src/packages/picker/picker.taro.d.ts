import React, { RefObject } from 'react';
import { PickerOption } from './types';
import { BasicComponent } from '@/utils/typings';
export type PickerActions = {
    open: () => void;
    close: () => void;
};
export interface PickerProps extends Omit<BasicComponent, 'children'> {
    visible?: boolean | undefined;
    title?: string;
    options: (PickerOption | PickerOption[])[];
    value?: (number | string)[];
    defaultValue?: (number | string)[];
    threeDimensional?: boolean;
    duration: number | string;
    onConfirm?: (selectedOptions: PickerOption[], selectedValue: (string | number)[]) => void;
    onClose?: (selectedOptions: PickerOption[], selectedValue: (string | number)[]) => void;
    afterClose?: (selectedOptions: PickerOption[], selectedValue: (string | number)[], pickerRef: RefObject<HTMLDivElement>) => void;
    onChange?: (selectedOptions: PickerOption[], selectedValue: (string | number)[], columnIndex: number) => void;
    children?: any;
}
declare const Picker: React.ForwardRefExoticComponent<Partial<PickerProps> & React.RefAttributes<unknown>>;
export default Picker;
