import React, { FunctionComponent } from 'react';
import type { ChangeEvent, FocusEvent, MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface SearchBarProps extends BasicComponent {
    /** 文本值	 */
    value?: number | string;
    /** 输入框占位提示文字	 */
    placeholder?: string;
    /** 搜索框形状，可选值为 round	 */
    shape?: 'square' | 'round';
    /** 是否禁用输入框	 */
    disabled?: boolean;
    /** 最大输入长度	 */
    maxLength?: number;
    /** 是否启用清除图标，点击清除图标后会清空输入框	 */
    clearable?: boolean;
    /** 是否将输入框设为只读状态，只读状态下无法输入内容   */
    readOnly?: boolean;
    /**  是否自动聚焦，iOS 系统不支持该属性	 */
    autoFocus?: boolean;
    left: React.ReactNode;
    right: React.ReactNode;
    leftIn: React.ReactNode;
    rightIn: React.ReactNode;
    /**  确定搜索时触发	 */
    onSearch?: (val: string) => void;
    /** 输入框内容变化时触发	 */
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
    /** 输入框获得焦点时触发	 */
    onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
    /** 输入框失去焦点时触发	 */
    onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
    /** 点击清除按钮后触发	 */
    onClear?: (event: MouseEvent<HTMLDivElement>) => void;
    /** 点击输入区域时触发	 */
    onInputClick?: (event: MouseEvent<HTMLInputElement>) => void;
}
export declare const SearchBar: FunctionComponent<Partial<SearchBarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur'>>;
