import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface StickyProps extends BasicComponent {
    container: React.RefObject<HTMLElement>;
    position: 'top' | 'bottom';
    threshold: number;
    zIndex: number;
    onChange: (val: boolean) => void;
}
export declare const Sticky: FunctionComponent<Partial<StickyProps>>;
