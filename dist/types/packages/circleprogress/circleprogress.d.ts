import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface Color {
    [key: string]: string;
}
export interface CircleProgressProps extends BasicComponent {
    /**
    * 百分比
    * @default 必传项，无默认值
    */
    percent: string | number
    /**
    * 圆弧的宽度
    * @default 5
    */
    strokeWidth?: string | number
    /**
    * 半径
    * @default 50
    */
    radius?: number | string
    /**
    * 圆环进度条端点形状
    * @default round
    */
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
    /**
    * 圆环进度条颜色，传入对象格式可以定义渐变色
    * @default -
    */
    color?: Record<string, string> | string
    /**
    * 圆环轨道颜色
    * @default #d9d9d9
    */
    background?: string
    /**
    * 是否顺时针展示
    * @default true
    */
    clockwise?: boolean
}
export declare const CircleProgress: FunctionComponent<CircleProgressProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>>;
