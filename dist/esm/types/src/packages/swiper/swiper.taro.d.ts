import React, { ReactNode } from 'react';
import { SwiperProps as TaroSwiperProps } from '@tarojs/components';
export interface SwiperProps extends Omit<TaroSwiperProps, 'ref'> {
    width: number;
    height: number | string;
    direction: 'horizontal' | 'vertical';
    indicator: ReactNode;
    autoPlay: boolean;
    loop: boolean;
    defaultValue: number;
}
export declare const Swiper: React.ForwardRefExoticComponent<Partial<SwiperProps> & React.RefAttributes<unknown>>;
