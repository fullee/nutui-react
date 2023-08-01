import React, { FunctionComponent } from 'react';
import { AnimateType, AnimateAction } from './type';
import { BasicComponent } from '../../utils/typings';
export interface AnimateProps extends BasicComponent {
    /**
    * 动画类型，见下方type值说明
    * @default shake
    */
    type: AnimateType
    /**
    * 触发方式，'initial'--初始化执行; 'click'--点击执行
    * @default initial
    */
    action: AnimateAction
    /**
    * 是否循环执行。true-循环执行;false-执行一次
    * @default false
    */
    loop: boolean
    /**
    * 点击元素时触发
    * @default -
    */
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export declare const Animate: FunctionComponent<Partial<AnimateProps> & React.HTMLAttributes<HTMLDivElement>>;
