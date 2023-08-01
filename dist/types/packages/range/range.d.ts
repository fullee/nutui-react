import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export type RangeValue = number | number[];
export interface RangeProps extends BasicComponent {
    /**
    * 当前进度百分比，受控
    * @default 0
    */
    value: RangeValue
    /**
    * 默认进度百分比，非受控
    * @default 0
    */
    defaultValue: RangeValue
    /**
    * 是否开启双滑块模式
    * @default false
    */
    range: boolean
    /**
    * 是否禁用滑块
    * @default false
    */
    disabled: boolean
    /**
    * 最小值
    * @default 0
    */
    min: number
    /**
    * 最大值
    * @default 100
    */
    max: number
    /**
    * 步长
    * @default 1
    */
    step: number
    /**
    * 最小值描述，传 null 表示隐藏
    * @default -
    */
    minDescription: ReactNode
    /**
    * 最大值描述，传 null 表示隐藏
    * @default -
    */
    maxDescription: ReactNode
    /**
    * 自定义滑动按钮
    * @default -
    */
    button: ReactNode
    /**
    * 是否竖向展示
    * @default false
    */
    vertical: boolean
    /**
    * 刻度标示
    * @default {}
    */
    marks: Record<string, unknown>
    /**
    * 当前值描述，传 null 表示隐藏
    * @default -
    */
    currentDescription: ((value: RangeValue) => ReactNode) | null
    /**
    * 进度实时变化，通常在受控方式中与 value 一起使用
    * @default -
    */
    onChange: (value: RangeValue) => void
    /**
    * 开始拖动时触发
    * @default -
    */
    onStart: () => void
    /**
    * 结束拖动时触发
    * @default -
    */
    onEnd: (value: RangeValue) => void
}
export declare const Range: FunctionComponent<Partial<RangeProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange' | 'defaultValue'>>;
