import React, { ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export type SwiperRef = {
    to: (index: number) => void;
    next: () => void;
    prev: () => void;
};
export interface SwiperProps extends BasicComponent {
    width: number | string;
    height: number | string;
    duration: number | string;
    defaultValue: number | string;
    autoPlay: number | string;
    direction: 'horizontal' | 'vertical';
    indicator: ReactNode;
    loop: boolean;
    touchable: boolean;
    preventDefault: boolean;
    stopPropagation: boolean;
    center: boolean;
    onChange?: (current: number) => void;
}
export declare const Swiper: React.ForwardRefExoticComponent<Partial<SwiperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & React.RefAttributes<SwiperRef>>;
