import React, { ReactNode } from 'react';
import { PopupProps } from '../../packages/popup/index';
import { Day, InputDate, SelectedType } from '../calendar/type';
type CalendarRef = {
    scrollToDate: (date: string) => void;
};
export interface CalendarItemProps extends PopupProps {
    type: SelectedType;
    autoBackfill: boolean;
    popup: boolean;
    title: string;
    value?: InputDate;
    defaultValue?: InputDate;
    startDate: InputDate;
    endDate: InputDate;
    showToday: boolean;
    startText: ReactNode;
    endText: ReactNode;
    confirmText: ReactNode;
    showTitle: boolean;
    showSubTitle: boolean;
    scrollAnimation: boolean;
    firstDayOfWeek: number;
    disableDate: (date: Day) => boolean;
    renderHeaderButtons: () => string | JSX.Element;
    renderDay: (date: Day) => string | JSX.Element;
    renderDayTop: (date: Day) => string | JSX.Element;
    renderDayBottom: (date: Day) => string | JSX.Element;
    onConfirm: (data: string) => void;
    onUpdate: () => void;
    onDayClick: (data: string) => void;
    onPageChange: (data: any) => void;
}
export declare const CalendarItem: React.ForwardRefExoticComponent<Partial<CalendarItemProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ""> & React.RefAttributes<CalendarRef>>;
export {};
