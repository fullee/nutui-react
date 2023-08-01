import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface ProgressProps extends BasicComponent {
    /**
    * 百分比
    * @default 0
    */
    percent: number
    /**
    * 进度条背景颜色
    * @default #f3f3f3
    */
    background: string
    /**
    * 进度条线条颜色
    * @default linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)
    */
    color: string
    /**
    * 进度条宽度
    * @default -
    */
    strokeWidth: string
    /**
    * 是否显示文字内容
    * @default false
    */
    showText: boolean
    /**
    * 是否展示动画效果
    * @default false
    */
    animated: boolean
    /**
    * 每次进入可视区展示进度条动画
    * @default false
    */
    lazy: boolean
    /**
    * 延迟数据加载时长，单位 ms
    * @default 0
    */
    delay: number
}
export declare const Progress: FunctionComponent<Partial<ProgressProps> & React.HTMLAttributes<HTMLDivElement>>;
