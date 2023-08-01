import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface SideNavBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>, BasicComponent {
    title: ReactNode;
    visible: boolean;
    width?: string;
    indent?: number;
    position?: 'left' | 'right';
    onClose: () => void;
}
export declare const SideNavBar: FunctionComponent<SideNavBarProps>;
