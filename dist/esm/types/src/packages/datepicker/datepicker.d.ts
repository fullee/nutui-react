import React, { FunctionComponent } from 'react';
import { PickerOption } from '@/packages/picker/index';
import { BasicComponent } from '@/utils/typings';
export interface DatePickerProps extends BasicComponent {
    value?: Date;
    defaultValue?: Date;
    visible: boolean;
    title: string;
    type: 'date' | 'time' | 'year-month' | 'month-day' | 'datehour' | 'datetime' | 'hour-minutes';
    showChinese: boolean;
    minuteStep: number;
    startDate: Date;
    endDate: Date;
    threeDimensional: boolean;
    formatter: (type: string, option: PickerOption) => PickerOption;
    filter: (type: string, option: PickerOption[]) => PickerOption[];
    onClose: () => void;
    onConfirm: (selectedOptions: PickerOption[], selectedValue: (string | number)[]) => void;
    onChange?: (selectedOptions: PickerOption[], selectedValue: (string | number)[], columnIndex: number) => void;
}
export declare const DatePicker: FunctionComponent<Partial<DatePickerProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>>;
