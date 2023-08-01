import React, { FunctionComponent } from 'react';
import type { FocusEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface TextAreaProps extends BasicComponent {
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
    onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void;
    onFocus: (event: FocusEvent<HTMLTextAreaElement>) => void;
}
export declare const TextArea: FunctionComponent<Partial<TextAreaProps> & Omit<React.HTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onBlur' | 'onFocus'>>;
