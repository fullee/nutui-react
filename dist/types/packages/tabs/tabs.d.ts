import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
import TabPane from '../../packages/tabpane';
export type TabsTitle = {
    title: string;
    disabled: boolean;
    active?: boolean;
    value: string | number;
};
export interface TabsProps extends BasicComponent {
    /**
    * 标签栏样式
    * @default {}
    */
    tabStyle: React.CSSProperties
    /**
    * 当前激活 tab 面板的值
    * @default 0
    */
    value: string | number
    /**
    * 初始化激活 tab 的值
    * @default 0
    */
    defaultValue: string | number
    /**
    * 标签选中色
    * @default #1a1a1a
    */
    activeColor: string
    /**
    * 使用横纵方向
    * @default horizontal
    */
    direction: 'horizontal' | 'vertical'
    /**
    * 选中底部展示样式 可选值 line、smile
    * @default line
    */
    activeType: 'line' | 'smile'
    /**
    * 切换动画时长,单位 ms 0 代表无动画
    * @default 300
    */
    duration: number | string
    /**
    * 标题左对齐
    * @default -
    */
    align: 'left' | 'right'
    /**
    * 自定义导航区域
    * @default -
    */
    title: () => JSX.Element[]
    /**
    * 当前激活的标签改变时触发
    * @default -
    */
    onChange: (index: string | number) => void
    /**
    * 点击标签时触发
    * @default -
    */
    onClick: (index: string | number) => void
    /**
    * 自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。
    * @default false
    */
    autoHeight: boolean
    children?: React.ReactNode;
}
export declare const Tabs: FunctionComponent<Partial<TabsProps>> & {
    TabPane: typeof TabPane;
};
