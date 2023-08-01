import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type ToastPositionType = 'top' | 'bottom' | 'center';
export interface ToastProps extends BasicComponent {
    id?: string;
    maskClassName?: string;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    icon: string | React.ReactNode;
    iconSize: string;
    msg: string | React.ReactNode;
    duration: number;
    position?: ToastPositionType;
    type: string;
    title: string;
    closeOnOverlayClick: boolean;
    lockScroll: boolean;
    size: string | number;
    visible: boolean;
    onClose: () => void;
}
export declare const Toast: FunctionComponent<Partial<ToastProps> & React.HTMLAttributes<HTMLDivElement>>;
