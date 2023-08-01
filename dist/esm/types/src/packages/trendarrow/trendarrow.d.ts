import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface TrendArrowProps extends BasicComponent {
    value: number;
    digits: number;
    symbol: boolean;
    zero: boolean;
    left: boolean;
    sync: boolean;
    color: string;
    riseColor: string;
    dropColor: string;
    riseIcon: React.ReactNode;
    dropIcon: React.ReactNode;
}
export declare const TrendArrow: FunctionComponent<Partial<TrendArrowProps> & React.HTMLAttributes<HTMLDivElement>>;
