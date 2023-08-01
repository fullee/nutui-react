import React, { FunctionComponent } from 'react';
import { MenuItem } from '@/packages/menuitem/menuitem.taro';
import { BasicComponent } from '@/utils/typings';
export interface MenuProps extends BasicComponent {
    activeColor: string;
    closeOnOverlayClick: boolean;
    scrollFixed: boolean | string | number;
    lockScroll: boolean;
    icon: React.ReactNode;
    children: React.ReactNode;
    onOpen: () => void;
    onClose: () => void;
}
export declare const Menu: FunctionComponent<Partial<MenuProps>> & {
    Item: typeof MenuItem;
};
