import React, { FunctionComponent } from 'react';
import { ITouchEvent } from '@tarojs/components';
import { BasicComponent } from '@/utils/typings';
export interface OverlayProps extends BasicComponent {
    zIndex: number;
    duration: number;
    closeOnOverlayClick: boolean;
    visible: boolean;
    lockScroll: boolean;
    onClick: (event: ITouchEvent) => void;
    afterShow: () => void;
    afterClose: () => void;
}
export declare const defaultOverlayProps: OverlayProps;
export declare const Overlay: FunctionComponent<Partial<OverlayProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
