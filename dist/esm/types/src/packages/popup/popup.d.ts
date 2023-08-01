import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';
import { OverlayProps } from '@/packages/overlay/overlay';
type Teleport = HTMLElement | (() => HTMLElement) | null;
export interface PopupProps extends OverlayProps {
    position: string;
    transition: string;
    overlayStyle: React.CSSProperties;
    overlayClassName: string;
    closeable: boolean;
    closeIconPosition: string;
    closeIcon: ReactNode;
    left: ReactNode;
    title: ReactNode;
    destroyOnClose: boolean;
    portal: Teleport;
    overlay: boolean;
    round: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOverlayClick: (e: MouseEvent) => boolean | void;
    onCloseIconClick: (e: MouseEvent) => boolean | void;
}
export declare const Popup: FunctionComponent<Partial<PopupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>>;
export {};
