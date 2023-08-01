import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface TimeType {
    value?: string;
    text?: string;
    [prop: string]: any;
}
export interface DateType {
    value?: string;
    text?: string;
    children?: TimeType[];
    [prop: string]: any;
}
export interface OptionKeyType {
    valueKey: string;
    textKey: string;
    childrenKey: string;
}
export interface TimeSelectProps extends BasicComponent {
    visible: boolean;
    multiple?: boolean;
    title?: ReactNode;
    defaultValue: DateType[];
    options: DateType[];
    optionKey: OptionKeyType;
    onSelect?: (value: DateType[]) => void;
    onDateChange?: (date: DateType, value: DateType[]) => void;
    onTimeChange?: (time: TimeType, value: DateType[]) => void;
}
export declare const TimeSelect: FunctionComponent<Partial<TimeSelectProps>>;
