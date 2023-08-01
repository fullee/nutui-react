import React, { FunctionComponent } from 'react';
import { PopupProps } from '@/packages/popup/popup';
export type PopoverLocation = 'bottom' | 'top' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
export interface List {
    key?: string;
    name: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}
export interface PopoverProps extends PopupProps {
    list: List[];
    location: PopoverLocation | string;
    visible: boolean;
    offset: string[] | number[];
    targetId: string;
    showArrow: boolean;
    closeOnOutsideClick: boolean;
    closeOnActionClick: boolean;
    children?: React.ReactNode;
    onClick: () => void;
    onOpen: () => void;
    onClose: () => void;
    onSelect: (item: List, index: number) => void;
}
export declare const Popover: FunctionComponent<Partial<PopoverProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>>;
