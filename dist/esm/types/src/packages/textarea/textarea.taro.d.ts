import { FunctionComponent } from 'react';
import { TextareaProps } from '@tarojs/components';
import { BasicComponent } from '@/utils/typings';
export interface TextAreaProps extends Omit<TextareaProps, 'showCount' | 'onFocus' | 'onBlur'>, Omit<BasicComponent, 'style'> {
    value: string;
    defaultValue: string;
    showCount: boolean;
    maxLength: number;
    rows: number;
    placeholder: string;
    readOnly: boolean;
    disabled: boolean;
    autoSize: boolean;
    onChange: (value: string) => void;
    onBlur: (event: Event) => void;
    onFocus: (event: Event) => void;
}
export declare const TextArea: FunctionComponent<Partial<TextAreaProps>>;
