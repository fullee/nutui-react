import React, { FunctionComponent } from 'react';
import { PopupProps } from '@/packages/popup/popup';
export interface NumberKeyboardProps extends PopupProps {
    visible: boolean;
    confirmText?: string;
    type: 'default' | 'rightColumn';
    custom: Array<string>;
    random: boolean;
    onChange?: (value: string) => void;
    onDelete?: () => void;
    onClose: () => void;
    onConfirm?: () => void;
}
export declare const NumberKeyboard: FunctionComponent<Partial<NumberKeyboardProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onClick' | 'title'>>;
