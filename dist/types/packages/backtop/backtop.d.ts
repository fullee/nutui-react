import React, { FunctionComponent } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface BackTopProps extends BasicComponent {
    /**
    * 获取监听的目标元素
    * @default -
    */
    target: string
    /**
    * 页面垂直滚动多高后出现
    * @default 200
    */
    threshold: number
    /**
    * 设置组件页面层级
    * @default 10
    */
    zIndex: number
    /**
    * 设置动画持续时间，为 0 时表示无动画
    * @default 1000
    */
    duration: number
    /**
    * 按钮点击时触发事件
    * @default -
    */
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
}
export declare const BackTop: FunctionComponent<Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
