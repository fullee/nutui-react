import React, { ReactNode } from 'react';
import { Day, SelectedType } from './type';
type CalendarRef = {
    scrollToDate: (date: string) => void;
};
export interface CalendarProps {
    /**
    * 类型，日期选择'single'，区间选择'range'
    * @default single
    */
    type?: SelectedType
    /**
    * 自动回填
    * @default false
    */
    autoBackfill?: boolean
    /**
    * 是否弹窗状态展示
    * @default true
    */
    popup?: boolean
    /**
    * 是否可见
    * @default false
    */
    visible?: boolean
    /**
    * 显示标题
    * @default 日期选择
    */
    title?: string
    /**
    * 默认值，日期选择 string 格式，区间选择 Array 格式
    * @default -
    */
    defaultValue?: string | string[]
    /**
    * 开始日期， 如果不限制开始日期传 null
    * @default 今天
    */
    startDate?: string
    /**
    * 结束日期，如果不限制结束日期传 null
    * @default 距离今天 365 天
    */
    endDate?: string
    /**
    * 是否展示今天标记
    * @default true
    */
    showToday?: boolean
    /**
    * 范围选择，开始信息文案
    * @default 开始
    */
    startText?: ReactNode
    /**
    * 范围选择，结束信息文案
    * @default 结束
    */
    endText?: ReactNode
    /**
    * 底部确认按钮文案
    * @default 确认
    */
    confirmText?: ReactNode
    /**
    * 是否在展示日历标题
    * @default true
    */
    showTitle?: boolean
    /**
    * 是否展示日期标题
    * @default true
    */
    showSubTitle?: boolean
    /**
    * 是否启动滚动动画
    * @default true
    */
    scrollAnimation?: boolean
    /**
    * 设置周起始日
    * @default 0
    */
    firstDayOfWeek: number
    /**
    * 设置不可选日期
    * @default -
    */
    disableDate: (date: Day) => boolean
    /**
    * 自定义日历标题下部，可用以添加自定义操作
    * @default -
    */
    renderHeaderButtons?: () => string | JSX.Element
    /**
    * 日期信息
    * @default -
    */
    renderDay?: (date: Day) => string | JSX.Element
    /**
    * 日期顶部信息
    * @default -
    */
    renderDayTop?: (date: Day) => string | JSX.Element
    /**
    * 日期底部信息
    * @default -
    */
    renderDayBottom?: (date: Day) => string | JSX.Element
    /**
    * 关闭时触发
    * @default 
    */
    onClose?: () => void
    /**
    * 选择之后或是点击确认按钮触发
    * @default 
    */
    onConfirm?: (param: string) => void
    /**
    * 点击/选择后触发
    * @default 
    */
    onDayClick?: (data: string) => void
    /**
    * 年月子标题到达顶部时触发
    * @default 
    */
    onPageChange?: (param: string) => void
}
export declare const Calendar: React.ForwardRefExoticComponent<Partial<CalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ""> & React.RefAttributes<CalendarRef>>;
export {};
