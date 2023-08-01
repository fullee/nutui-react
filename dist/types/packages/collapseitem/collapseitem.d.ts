import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface CollapseItemProps extends BasicComponent {
    /**
    * 标题栏左侧内容
    * @default -
    */
    title: ReactNode
    /**
    * 唯一标识符，必填
    * @default -
    */
    name: string
    /**
    * 自定义展开图标
    * @default -
    */
    expandIcon: ReactNode
    /**
    * 标题栏是否禁用
    * @default false
    */
    disabled: boolean
    /**
    * 点击折叠和展开的旋转角度,在自定义图标模式下生效
    * @default 180
    */
    rotate: number
    /**
    * 标题栏副标题
    * @default -
    */
    extra: ReactNode
}
export declare const CollapseItem: FunctionComponent<Partial<CollapseItemProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>>;
