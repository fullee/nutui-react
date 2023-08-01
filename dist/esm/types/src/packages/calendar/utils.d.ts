import { Day, MonthInfo } from './type';
export declare const splitDate: (date: string) => string[];
export declare const isMultiple: (day: string, days: string[]) => boolean;
export declare const isCurrDay: (month: MonthInfo, day: string | number) => boolean;
export declare const getCurrDate: (day: Day, month: MonthInfo) => string;
export declare const isStart: (day: string, days: string[]) => boolean;
export declare const isEnd: (day: string, days: string[]) => boolean;
export declare const isStartAndEnd: (days: string[]) => boolean;
