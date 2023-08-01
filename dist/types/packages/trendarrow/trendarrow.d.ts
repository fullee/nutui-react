import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface TrendArrowProps extends BasicComponent {
    /**
    * 数值，大于0时箭头向上，小于0时箭头向下
    * @default -
    */
    value: number
    /**
    * 小数位精度
    * @default 2
    */
    digits: number
    /**
    * 是否显示加减号
    * @default false
    */
    symbol: boolean
    /**
    * 是否显示 0
    * @default false
    */
    zero: boolean
    /**
    * 是否在数字左侧显示箭头
    * @default false
    */
    left: boolean
    /**
    * 文字颜色是否与箭头同步
    * @default true
    */
    sync: boolean
    /**
    * 文字颜色
    * @default #333333
    */
    color: string
    /**
    * 向上箭头颜色
    * @default #fa2c19
    */
    riseColor: string
    /**
    * 向下箭头颜色
    * @default #64b578
    */
    dropColor: string
    /**
    * 自定义向上箭头icon
    * @default <TriangleUp/>
    */
    riseIcon: React.ReactNode
    /**
    * 自定义向下箭头icon
    * @default <TriangleDown/>
    */
    dropIcon: React.ReactNode
}
export declare const TrendArrow: FunctionComponent<Partial<TrendArrowProps> & React.HTMLAttributes<HTMLDivElement>>;
