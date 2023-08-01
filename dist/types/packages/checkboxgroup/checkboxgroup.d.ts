import React from 'react';
import { RadioGroupOptionType } from '../../packages/radiogroup/type';
export type CheckboxLabelPosition = 'left' | 'right';
export type CheckboxDirection = 'horizontal' | 'vertical';
export interface CheckboxGroupProps {
    /**
    * 是否禁用选择,将用于其下的全部复选框
    * @default false
    */
    disabled?: boolean
    /**
    * 当前选中项的标识符
    * @default -
    */
    value?: string[]
    /**
    * 初始选中项的标识符
    * @default -
    */
    defaultValue?: string[]
    /**
    * 限制最大可选数
    * @default -
    */
    max: number | undefined
    /**
    * 文本所在的位置
    * @default right
    */
    labelPosition: CheckboxLabelPosition
    /**
    * 使用横纵方向 可选值 horizontal、vertical
    * @default vertical
    */
    direction: CheckboxDirection
    /**
    * 配置 options 渲染复选按钮
    * @default -
    */
    options: RadioGroupOptionType[]
    /**
    * 值变化时触发
    * @default -
    */
    onChange: (value: string[]) => void
}
export declare const CheckboxGroup: React.ForwardRefExoticComponent<Partial<CheckboxGroupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & React.RefAttributes<unknown>>;
