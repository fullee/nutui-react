import React from 'react';
import { BasicComponent } from '@/utils/typings';
export interface BarrageProps extends BasicComponent {
    list: Array<string>;
    interval: number;
    loop: boolean;
    duration: number;
    rows: number;
    gapY: number;
}
export declare const Barrage: React.ForwardRefExoticComponent<Partial<BarrageProps> & React.RefAttributes<unknown>>;
