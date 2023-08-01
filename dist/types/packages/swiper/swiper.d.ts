import React, { ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export type SwiperRef = {
    to: (index: number) => void;
    next: () => void;
    prev: () => void;
};
export interface SwiperProps extends BasicComponent {
    /**
    * 轮播卡片的宽度
    * @default window.innerWidth
    */
    width: number | string
    /**
    * 轮播卡片的高度
    * @default 0
    */
    height: number | string
    /**
    * 动画时长（单位是ms）
    * @default 500
    */
    duration: number | string
    /**
    * 初始化索引值
    * @default 0
    */
    defaultValue: number | string
    /**
    * 自动轮播时长，0表示不会自动轮播
    * @default 0
    */
    autoPlay: number | string
    /**
    * 轮播方向
    * @default horizontal
    */
    direction: 'horizontal' | 'vertical'
    /**
    * 分页指示器是否展示，可传入自定义的 HTML 结构
    * @default false
    */
    indicator: ReactNode
    /**
    * 是否循环轮播
    * @default true
    */
    loop: boolean
    /**
    * 是否可触摸滑动
    * @default true
    */
    touchable: boolean
    /**
    * 滑动过程中是否禁用默认事件
    * @default true
    */
    preventDefault: boolean
    /**
    * 滑动过程中是否禁止冒泡
    * @default true
    */
    stopPropagation: boolean
    /**
    * 是否居中展示，必须传对应的width 和 height
    * @default false
    */
    center: boolean
    /**
    * 卡片切换后的回调
    * @default -
    */
    onChange?: (current: number) => void
}
export declare const Swiper: React.ForwardRefExoticComponent<Partial<SwiperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & React.RefAttributes<SwiperRef>>;
