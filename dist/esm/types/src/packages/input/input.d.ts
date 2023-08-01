import React, { HTMLInputTypeAttribute, MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type InputAlignType = 'left' | 'center' | 'right';
export type InputFormatTrigger = 'onChange' | 'onBlur';
export type InputType = HTMLInputTypeAttribute;
export type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done';
export interface InputProps extends BasicComponent {
    type: InputType;
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
    onClick?: (value: MouseEvent<HTMLDivElement>) => void;
}
export declare const Input: React.ForwardRefExoticComponent<Partial<InputProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick" | "onFocus" | "onBlur" | "onChange"> & React.RefAttributes<unknown>>;
