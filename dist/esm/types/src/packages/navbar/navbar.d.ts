import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface NavBarProps extends BasicComponent {
    left: React.ReactNode;
    back: React.ReactNode;
    right: React.ReactNode;
    fixed: boolean;
    safeAreaInsetTop: boolean;
    placeholder: boolean;
    zIndex: number | string;
    onBackClick: (e: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
}
export declare const NavBar: FunctionComponent<Partial<NavBarProps>>;
