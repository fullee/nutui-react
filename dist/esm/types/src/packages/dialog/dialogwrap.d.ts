import React, { FunctionComponent, HTMLAttributes } from 'react';
import { OverlayProps } from '@/packages/overlay/overlay';
interface DialogWrapProps extends OverlayProps {
    visible: boolean;
    overlay: boolean;
    overlayStyle: React.CSSProperties;
    overlayClassName: string;
    footer: React.ReactNode;
    onCancel: () => void;
    onClose: () => void;
    onOverlayClick: (e: MouseEvent) => boolean | void;
}
export declare const DialogWrap: FunctionComponent<Partial<DialogWrapProps> & Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content'>>;
export {};
