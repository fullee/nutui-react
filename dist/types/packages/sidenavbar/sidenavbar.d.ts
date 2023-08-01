import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface SideNavBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>, BasicComponent {
    /**
    * 整体标题
    * @default -
    */
    title: ReactNode
    /**
    * 组件是否显示
    * @default false
    */
    visible: boolean
    /**
    * 遮罩宽度百分比
    * @default 80%
    */
    width?: string
    /**
    * 缩进宽度
    * @default 20
    */
    indent?: number
    /**
    * 弹出位置
    * @default left
    */
    position?: 'left' | 'right'
    /**
    * 关闭遮罩时触发
    * @default -
    */
    onClose: () => void
}
export declare const SideNavBar: FunctionComponent<SideNavBarProps>;
