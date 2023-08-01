import React from 'react';
import { BasicComponent } from '../../utils/typings';
export interface OptionItem {
    text: string;
    value: string | number;
}
export interface MenuItemProps extends BasicComponent {
    /**
    * 菜单项标题
    * @default 当前选中项文字
    */
    title: React.ReactNode
    /**
    * 选项数组
    * @default -
    */
    options: OptionItem[]
    /**
    * 是否禁用菜单
    * @default false
    */
    disabled: boolean
    /**
    * 可以设置一行展示多少列 options
    * @default 1
    */
    columns: number
    /**
    * 自定义选项图标
    * @default Check
    */
    icon: React.ReactNode
    closeOnClickAway: boolean;
    /**
    * 菜单展开方向，可选值为up
    * @default down
    */
    direction: string
    activeTitleClass: string;
    inactiveTitleClass: string;
    value: string | number;
    /**
    * 选择 option 之后触发
    * @default -
    */
    onChange: (event: any) => void
    children: React.ReactNode;
}
export declare const MenuItem: React.ForwardRefExoticComponent<Partial<MenuItemProps> & React.RefAttributes<unknown>>;
