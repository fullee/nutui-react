import React, { FunctionComponent } from 'react';
import { PickerOption } from '../../packages/picker/index';
import { BasicComponent } from '../../utils/typings';
export interface DatePickerProps extends BasicComponent {
    /**
    * 受控
    * @default null
    */
    value?: Date
    /**
    * 初始值
    * @default null
    */
    defaultValue?: Date
    /**
    * 是否可见
    * @default false
    */
    visible: boolean
    /**
    * 设置标题
    * @default null
    */
    title: string
    /**
    * 类时间类型，可选值 date time year-month month-day datehour datetime hour-minutes
    * @default date
    */
    type: 'date' | 'time' | 'year-month' | 'month-day' | 'datehour' | 'datetime' | 'hour-minutes'
    /**
    * 每列是否展示中文
    * @default false
    */
    showChinese: boolean
    /**
    * 分钟步进值
    * @default 1
    */
    minuteStep: number
    /**
    * 开始日期
    * @default 十年前
    */
    startDate: Date
    /**
    * 结束日期
    * @default 十年后
    */
    endDate: Date
    /**
    * 是否开启3D效果
    * @default true
    */
    threeDimensional: boolean
    /**
    * 选项格式化函数
    * @default -
    */
    formatter: (type: string, option: PickerOption) => PickerOption
    /**
    * 选项过滤函数
    * @default -
    */
    filter: (type: string, option: PickerOption[]) => PickerOption[]
    /**
    * 关闭时触发
    * @default -
    */
    onClose: () => void
    /**
    * 点击确定按钮时触发
    * @default -
    */
    onConfirm: (selectedOptions: PickerOption[], selectedValue: (string | number)[]) => void
    /**
    * 选项改变时触发
    * @default -
    */
    onChange?: (selectedOptions: PickerOption[], selectedValue: (string | number)[], columnIndex: number) => void
}
export declare const DatePicker: FunctionComponent<Partial<DatePickerProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>>;
