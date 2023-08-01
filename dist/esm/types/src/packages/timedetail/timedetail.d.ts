import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
import { TimeType, DateType, OptionKeyType } from '@/packages/timeselect';
export interface TimeDetailProps extends BasicComponent {
    activeDate: string;
    activeTime: DateType[];
    options: DateType[];
    optionKey: OptionKeyType;
    onSelect: (time: TimeType) => void;
}
export declare const TimeDetail: FunctionComponent<Partial<TimeDetailProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>>;
