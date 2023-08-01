import React, { FunctionComponent, ReactNode } from 'react';
import { ITouchEvent } from '@tarojs/components';
import { OverlayProps } from '@/packages/overlay/overlay.taro';
type Teleport = HTMLElement | (() => HTMLElement) | null;
export interface PopupProps extends OverlayProps {
    position: string;
    transition: string;
    overlayStyle: React.CSSProperties;
    overlayClassName: string;
    closeable: boolean;
    closeIconPosition: string;
    closeIcon: ReactNode;
    left?: ReactNode;
    title?: ReactNode;
    destroyOnClose: boolean;
    portal: Teleport;
    overlay: boolean;
    round: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOverlayClick: (e: ITouchEvent) => boolean | void;
    onCloseIconClick: (e: ITouchEvent) => boolean | void;
}
export declare const Popup: FunctionComponent<Partial<PopupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'>>;
export {};
