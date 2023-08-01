import React from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small';
export type ButtonShape = 'square' | 'round';
export type ButtonFill = 'solid' | 'outline' | 'none';
export interface ButtonProps extends BasicComponent {
    /**
    * 按钮颜色，支持传入 linear-gradient 渐变色
    * @default -
    */
    color: string
    /**
    * 按钮的形状
    * @default round
    */
    shape: ButtonShape
    /**
    * 按钮的样式
    * @default default
    */
    type: ButtonType
    /**
    * 按钮的尺寸
    * @default normal
    */
    size: ButtonSize
    /**
    * 填充模式
    * @default solid
    */
    fill: ButtonFill
    /**
    * 是否为块级元素
    * @default false
    */
    block: boolean
    /**
    * 按钮loading状态
    * @default false
    */
    loading: boolean
    /**
    * 是否禁用按钮
    * @default false
    */
    disabled: boolean
    /**
    * 按钮图标
    * @default -
    */
    icon: React.ReactNode
    id: string;
    nativeType: 'submit' | 'reset' | 'button';
    /**
    * 点击按钮时触发
    * @default -
    */
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}
export declare const Button: React.ForwardRefExoticComponent<Partial<ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
