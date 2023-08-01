import React, { FunctionComponent } from 'react';
import RadioGroup from '../../packages/radiogroup';
import { BasicComponent } from '../../utils/typings';
export type RadioShape = 'button' | 'round';
export type RadioPosition = 'right' | 'left';
export interface RadioProps extends BasicComponent {
    /**
    * 是否禁用选择
    * @default false
    */
    disabled: boolean
    /**
    * 指定当前是否选中
    * @default -
    */
    checked: boolean
    /**
    * 初始是否选中
    * @default -
    */
    defaultChecked: boolean
    /**
    * 形状
    * @default round
    */
    shape: RadioShape
    /**
    * 文本所在的位置
    * @default right
    */
    labelPosition: RadioPosition
    /**
    * <a href="#/icon">图标名称</a>，选中前(建议和activeIcon一起修改)
    * @default 'CheckNormal'
    */
    icon: React.ReactNode
    /**
    * <a href="#/icon">图标名称</a>，选中后(建议和icon一起修改)
    * @default 'CheckChecked'
    */
    activeIcon: React.ReactNode
    /**
    * 携带的标识值，用于 Group 模式
    * @default -
    */
    value: string | number
    /**
    * 选中态变化时触发
    * @default -
    */
    onChange: (checked: boolean) => void
}
export declare const Radio: FunctionComponent<Partial<RadioProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>> & {
    Group: typeof RadioGroup;
};
