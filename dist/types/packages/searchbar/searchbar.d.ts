import React, { FunctionComponent } from 'react';
import type { ChangeEvent, FocusEvent, MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface SearchBarProps extends BasicComponent {
    /**
    * 当前输入的值
    * @default -
    */
    value?: number | string;
    /**
    * 输入框默认暗纹
    * @default 请输入
    */
    placeholder?: string;
    /**
    * 搜索框形状，可选值为 round
    * @default square
    */
    shape?: 'square' | 'round';
    /**
    * 是否禁用输入框
    * @default false
    */
    disabled?: boolean;
    /**
    * 最大输入长度
    * @default 9999
    */
    maxLength?: number;
    /**
    * 是否展示清除按钮
    * @default true
    */
    clearable?: boolean;
    /**
    * 输入框只读
    * @default false
    */
    readOnly?: boolean;
    /**
    * 是否自动聚焦
    * @default false
    */
    autoFocus?: boolean;
    /**
    * 搜索框左侧区域
    * @default -
    */
    left: React.ReactNode
    /**
    * 搜搜框右侧区域
    * @default -
    */
    right: React.ReactNode
    /**
    * 输入框内左侧区域
    * @default <Search width="12" height="12" />
    */
    leftIn: React.ReactNode
    /**
    * 输入框内右侧区域
    * @default -
    */
    rightIn: React.ReactNode
    /**
    * 确定搜索时触发
    * @default -
    */
    onSearch?: (val: string) => void;
    /**
    * 输入内容时触发
    * @default -
    */
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
    /**
    * 聚焦时触发
    * @default -
    */
    onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
    /**
    * 失焦时触发
    * @default -
    */
    onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
    /**
    * 点击清空时触发
    * @default -
    */
    onClear?: (event: MouseEvent<HTMLDivElement>) => void;
    /**
    * 点击输入区域时触发
    * @default -
    */
    onInputClick?: (event: MouseEvent<HTMLInputElement>) => void;
}
export declare const SearchBar: FunctionComponent<Partial<SearchBarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur'>>;
