import React from 'react';
import { BasicComponent } from '../../utils/typings';
export interface BarrageProps extends BasicComponent {
    /**
    * 弹幕列表数据
    * @default []
    */
    list: Array<string>
    /**
    * 可视区域内每个弹幕出现的时间间隔
    * @default 500
    */
    interval: number
    /**
    * 是否循环播放
    * @default true
    */
    loop: boolean
    /**
    * 每个弹幕的滚动时间
    * @default 3000
    */
    duration: number
    /**
    * 弹幕行数，分几行展示
    * @default 1
    */
    rows: number
    /**
    * 弹幕垂直距离
    * @default 10
    */
    gapY: number
}
export declare const Barrage: React.ForwardRefExoticComponent<Partial<BarrageProps> & React.RefAttributes<unknown>>;
