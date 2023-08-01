import { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface PriceProps extends BasicComponent {
    price: number | string;
    symbol: string;
    digits: number;
    thousands: boolean;
    position: string;
    size: string;
    line: boolean;
}
export declare const Price: FunctionComponent<Partial<PriceProps>>;
