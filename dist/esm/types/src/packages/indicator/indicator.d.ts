import React, { FunctionComponent } from 'react';
export interface IndicatorProps {
    total: number;
    current: number;
    direction: string;
}
export declare const Indicator: FunctionComponent<Partial<IndicatorProps> & React.HTMLAttributes<HTMLDivElement>>;
