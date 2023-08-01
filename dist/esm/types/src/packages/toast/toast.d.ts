import * as React from 'react';
import { BasicComponent } from '@/utils/typings';
export type ToastPositionType = 'top' | 'bottom' | 'center';
export type ToastIconType = 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode;
export interface ToastProps extends BasicComponent {
    id?: string;
    duration?: number;
    position?: ToastPositionType;
    title?: string;
    closeOnOverlayClick?: boolean;
    lockScroll?: boolean;
    size?: string | number;
    icon?: ToastIconType;
    content?: React.ReactNode;
    onClose?: () => void;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
}
declare function show(option: ToastProps | string): void;
declare function config(config: Pick<ToastProps, 'duration' | 'position' | 'closeOnOverlayClick' | 'lockScroll'>): void;
declare const _default: {
    show: typeof show;
    config: typeof config;
    clear(): void;
};
export default _default;
