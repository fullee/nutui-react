import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface NoticeBarProps extends BasicComponent {
    direction: string;
    list: any;
    duration: number;
    height: number;
    content: string;
    closeable: boolean;
    wrap: boolean;
    leftIcon: ReactNode;
    rightIcon: ReactNode;
    delay: string | number;
    scrollable: boolean | null;
    speed: number;
    close?: (event: any) => void;
    click?: (event: any) => void;
    onClose?: (event: any) => void;
    onClick?: (event: any) => void;
    onItemClick?: (event: any, value: any) => void;
}
export declare const NoticeBar: FunctionComponent<Partial<NoticeBarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
