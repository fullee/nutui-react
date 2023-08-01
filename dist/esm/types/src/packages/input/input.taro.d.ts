import React, { HTMLInputTypeAttribute } from 'react';
import { InputProps as TaroInputProps, ITouchEvent } from '@tarojs/components';
import { BasicComponent } from '@/utils/typings';
export type InputAlignType = 'left' | 'center' | 'right';
export type InputFormatTrigger = 'onChange' | 'onBlur';
export type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done';
export interface InputProps extends BasicComponent {
    type: keyof TaroInputProps.Type | HTMLInputTypeAttribute;
    name: string;
    defaultValue?: string;
    value?: string;
    placeholder: string;
    align: InputAlignType;
    disabled: boolean;
    readOnly: boolean;
    maxLength: number;
    clearable: boolean;
    clearIcon: React.ReactNode;
    formatTrigger: InputFormatTrigger;
    autoFocus: boolean;
    confirmType: ConfirmTextType;
    formatter?: (value: string) => void;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (value: string) => void;
    onClear?: (value: string) => void;
    onClick?: (e: ITouchEvent) => void;
}
export declare const Input: React.ForwardRefExoticComponent<Partial<InputProps> & Partial<Omit<TaroInputProps, "type" | "ref" | "onFocus" | "onBlur" | "password" | "maxlength">> & React.RefAttributes<unknown>>;
