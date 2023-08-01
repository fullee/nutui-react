import React, { FunctionComponent, ChangeEvent, FocusEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface InputNumberProps extends BasicComponent {
    /**
    * 禁用所有功能
    * @default false
    */
    disabled: boolean
    /**
    * 最小值限制
    * @default 1
    */
    min: string | number
    /**
    * 最大值限制
    * @default 9999
    */
    max: string | number
    /**
    * 只读状态禁用输入框操作行为
    * @default false
    */
    readOnly: boolean
    /**
    * 当前值，受控值
    * @default -
    */
    value: string | number
    /**
    * 默认值
    * @default 0
    */
    defaultValue: string | number
    /**
    * 是否允许内容为空
    * @default false
    */
    allowEmpty: boolean
    /**
    * 步长
    * @default 1
    */
    step: string | number
    /**
    * 设置保留的小数位
    * @default 0
    */
    digits: string | number
    /**
    * 支持异步修改
    * @default false
    */
    async: boolean
    /**
    * 指定输入框展示值的格式
    * @default -
    */
    formatter?: (displayValue: string | number) => string
    /**
    * 点击增加按钮时触发
    * @default -
    */
    onPlus: (e: MouseEvent) => void
    /**
    * 点击减少按钮时触发
    * @default -
    */
    onMinus: (e: MouseEvent) => void
    /**
    * 点击不可用的按钮时触发
    * @default -
    */
    onOverlimit: (e: MouseEvent) => void
    /**
    * 输入框失去焦点时触发
    * @default -
    */
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void
    /**
    * 输入框获得焦点时触发
    * @default -
    */
    onFocus: (e: FocusEvent<HTMLInputElement>) => void
    /**
    * 值改变时触发
    * @default -
    */
    onChange: (param: string | number, e: MouseEvent | ChangeEvent<HTMLInputElement>) => void
}
export declare const InputNumber: FunctionComponent<Partial<InputNumberProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'>>;
