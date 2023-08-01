import React, { ReactNode } from 'react';
import { Day, SelectedType } from './type';
type CalendarRef = {
    scrollToDate: (date: string) => void;
};
export interface CalendarProps {
    type?: SelectedType;
    autoBackfill?: boolean;
    popup?: boolean;
    visible?: boolean;
    title?: string;
    defaultValue?: string | string[];
    startDate?: string;
    endDate?: string;
    showToday?: boolean;
    startText?: ReactNode;
    endText?: ReactNode;
    confirmText?: ReactNode;
    showTitle?: boolean;
    showSubTitle?: boolean;
    scrollAnimation?: boolean;
    firstDayOfWeek: number;
    disableDate: (date: Day) => boolean;
    renderHeaderButtons?: () => string | JSX.Element;
    renderDay?: (date: Day) => string | JSX.Element;
    renderDayTop?: (date: Day) => string | JSX.Element;
    renderDayBottom?: (date: Day) => string | JSX.Element;
    onClose?: () => void;
    onConfirm?: (param: string) => void;
    onDayClick?: (data: string) => void;
    onPageChange?: (param: string) => void;
}
export declare const Calendar: React.ForwardRefExoticComponent<Partial<CalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ""> & React.RefAttributes<CalendarRef>>;
export {};
