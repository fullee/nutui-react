import React, { ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface CountDownProps extends BasicComponent {
    /**
    * 是否暂停
    * @default false
    */
    paused: boolean
    /**
    * 开始时间
    * @default Date.now()
    */
    startTime: number
    /**
    * 结束时间
    * @default Date.now()
    */
    endTime: number
    /**
    * 剩余时间，单位是毫秒
    * @default 0
    */
    remainingTime: number
    /**
    * 是否开启毫秒级渲染
    * @default false
    */
    millisecond: boolean
    /**
    * 时间格式
    * @default HH:mm:ss
    */
    format: string
    /**
    * 是否自动开始倒计时
    * @default true
    */
    autoStart: boolean
    /**
    * 倒计时显示时间，单位是毫秒。autoStart 为 false 时生效
    * @default 0
    */
    time: number
    /**
    * 销毁实例
    * @default false
    */
    destroy: boolean
    /**
    * 倒计时结束时回调函数
    * @default -
    */
    onEnd: () => void
    /**
    * 暂停倒计时回调函数
    * @default -
    */
    onPaused: (restTime: number) => void
    /**
    * 重新开始倒计时回调函数
    * @default -
    */
    onRestart: (restTime: number) => void
    /**
    * 自定义展示内容时，实时更新倒计时数据回调函数
    * @default -
    */
    onUpdate: (restTime: any) => void
    children: ReactNode;
}
export declare const CountDown: React.ForwardRefExoticComponent<Partial<CountDownProps> & React.RefAttributes<unknown>>;
