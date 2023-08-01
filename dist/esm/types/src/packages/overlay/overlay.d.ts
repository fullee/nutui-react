import React, { FunctionComponent, MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface OverlayProps extends BasicComponent {
    zIndex: number;
    duration: number;
    closeOnOverlayClick: boolean;
    visible: boolean;
    lockScroll: boolean;
    onClick: (event: MouseEvent) => void;
    afterShow: () => void;
    afterClose: () => void;
}
export declare const defaultOverlayProps: OverlayProps;
export declare const Overlay: FunctionComponent<Partial<OverlayProps> & React.HTMLAttributes<HTMLDivElement>>;
