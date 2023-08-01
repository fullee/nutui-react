import { FunctionComponent, ReactNode } from 'react';
import { PopupProps } from '../popup/popup';
export interface ShortPasswordProps extends PopupProps {
    value: string;
    visible: boolean;
    plain: boolean;
    title: ReactNode;
    description: ReactNode;
    tips: ReactNode;
    hideFooter: boolean;
    length: number;
    error: ReactNode;
    autoFocus: boolean;
    onFocus: () => void;
    onChange: (value: string) => void;
    onConfirm: (value: string) => void;
    onCancel: () => void;
    onClose: () => void;
    onTips: () => void;
    onComplete: (value: string) => void;
}
export declare const ShortPassword: FunctionComponent<Partial<ShortPasswordProps>>;
