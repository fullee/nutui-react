import React from 'react';
import { SwiperProps, SwiperRef } from './swiper';
import SwiperItem from '../../packages/swiperitem';
export type { SwiperProps, SwiperRef } from './swiper';
type CompoundedComponent = React.ForwardRefExoticComponent<Partial<SwiperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & React.RefAttributes<SwiperRef>> & {
    Item: typeof SwiperItem;
};
declare const InnerSwiper: CompoundedComponent;
export default InnerSwiper;
