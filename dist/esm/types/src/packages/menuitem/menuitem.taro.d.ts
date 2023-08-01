import React from 'react';
import { BasicComponent } from '@/utils/typings';
export interface OptionItem {
    text: string;
    value: string | number;
}
export interface MenuItemProps extends BasicComponent {
    title: React.ReactNode;
    options: OptionItem[];
    disabled: boolean;
    columns: number;
    icon: React.ReactNode;
    closeOnClickAway: boolean;
    direction: string;
    activeTitleClass: string;
    inactiveTitleClass: string;
    value: string | number;
    onChange: (event: any) => void;
    children: React.ReactNode;
}
export declare const MenuItem: React.ForwardRefExoticComponent<Partial<MenuItemProps> & React.RefAttributes<unknown>>;
