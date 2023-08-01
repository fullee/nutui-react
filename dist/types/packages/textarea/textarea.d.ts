import React, { FunctionComponent } from 'react';
import type { FocusEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface TextAreaProps extends BasicComponent {
    /**
    * 输入框内容，受控
    * @default -
    */
    value: string
    /**
    * 初始默认值，非受控
    * @default -
    */
    defaultValue: string
    /**
    * textarea 是否展示输入字符。须配合maxLength使用
    * @default false
    */
    showCount: boolean
    /**
    * 限制最长输入字符，-1 表示无限制
    * @default 140
    */
    maxLength: number
    /**
    * textarea 的行数
    * @default 2
    */
    rows: number
    /**
    * 设置占位提示文字
    * @default 请输入内容
    */
    placeholder: string
    /**
    * 只读属性
    * @default false
    */
    readOnly: boolean
    /**
    * 禁用属性
    * @default false
    */
    disabled: boolean
    /**
    * 高度是否可拉伸
    * @default false
    */
    autoSize: boolean
    /**
    * 输入内容时触发
    * @default -
    */
    onChange: (value: string) => void
    /**
    * 失焦时触发
    * @default -
    */
    onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void
    /**
    * 聚焦时触发
    * @default -
    */
    onFocus: (event: FocusEvent<HTMLTextAreaElement>) => void
}
export declare const TextArea: FunctionComponent<Partial<TextAreaProps> & Omit<React.HTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onBlur' | 'onFocus'>>;
