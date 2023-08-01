import React, { HTMLInputTypeAttribute, MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type InputAlignType = 'left' | 'center' | 'right';
export type InputFormatTrigger = 'onChange' | 'onBlur';
export type InputType = HTMLInputTypeAttribute;
export type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done';
export interface InputProps extends BasicComponent {
    /**
    * 输入框类型，支持原生 input 标签的所有 type 属性，另外还支持 number digit
    * @default text
    */
    type: InputType
    /**
    * 组件名字，用于表单提交获取数据
    * @default -
    */
    name: string
    /**
    * 初始默认值
    * @default -
    */
    defaultValue?: string
    /**
    * 初始默认值
    * @default -
    */
    value?: string
    /**
    * 输入框为空时占位符
    * @default -
    */
    placeholder: string
    /**
    * 输入框内容对齐方式，可选值 left、center、right
    * @default left
    */
    align: InputAlignType
    /**
    * 是否禁用
    * @default false
    */
    disabled: boolean
    /**
    * 是否只读
    * @default false
    */
    readOnly: boolean
    /**
    * 限制最长输入字符
    * @default -
    */
    maxLength: number
    /**
    * 展示清除 Icon
    * @default false
    */
    clearable: boolean
    /**
    * 清除图标 Icon <a href="#/icon">可参考 Icon </a>
    * @default MaskClose
    */
    clearIcon: React.ReactNode
    /**
    * 格式化函数触发的时机，可选值为 onChange、onBlur
    * @default -
    */
    formatTrigger: InputFormatTrigger
    /**
    * 是否自动获得焦点，iOS 系统不支持该属性
    * @default false
    */
    autoFocus: boolean
    /**
    * 键盘右下角按钮的文字，仅在type='text'时生效,可选值 send：发送、search：搜索、next：下一个、go：前往、done：完成
    * @default done
    */
    confirmType: ConfirmTextType
    /**
    * 输入内容格式化函数
    * @default -
    */
    formatter?: (value: string) => void
    /**
    * 输入框内容变化时触发
    * @default -
    */
    onChange?: (value: string) => void
    /**
    * 失去焦点后触发
    * @default -
    */
    onBlur?: (value: string) => void
    /**
    * 获得焦点后触发
    * @default -
    */
    onFocus?: (value: string) => void
    /**
    * 点击清空按钮时触发
    * @default -
    */
    onClear?: (value: string) => void
    /**
    * 点击 input 容器触发
    * @default -
    */
    onClick?: (value: MouseEvent<HTMLDivElement>) => void
}
export declare const Input: React.ForwardRefExoticComponent<Partial<InputProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick" | "onFocus" | "onBlur" | "onChange"> & React.RefAttributes<unknown>>;
