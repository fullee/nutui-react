import React from 'react';
import { SwiperProps } from './swiper.taro';
import SwiperItem from '@/packages/swiperitem/index.taro';
export type { SwiperProps } from './swiper.taro';
type CompoundedComponent = React.ForwardRefExoticComponent<Partial<SwiperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & React.RefAttributes<any>> & {
    Item: typeof SwiperItem;
};
declare const InnerSwiper: CompoundedComponent;
export default InnerSwiper;
