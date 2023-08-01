import React from 'react';
import { RadioGroupOptionType } from './type';
type Position = 'left' | 'right';
type Direction = 'horizontal' | 'vertical';
export interface RadioGroupProps {
    /**
    * 当前选中项的标识符
    * @default -
    */
    value?: string | number
    defaultValue?: string | number;
    /**
    * 文本所在的位置
    * @default right
    */
    labelPosition: Position
    /**
    * 使用横纵方向
    * @default vertical
    */
    direction: Direction
    /**
    * 是否禁用
    * @default false
    */
    disabled?: boolean
    /**
    * 配置 options 渲染单选按钮
    * @default -
    */
    options: RadioGroupOptionType[]
    /**
    * 值变化时触发
    * @default -
    */
    onChange: (value: string | number) => void
}
export declare const RadioGroup: React.ForwardRefExoticComponent<Partial<RadioGroupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & React.RefAttributes<unknown>>;
export {};
