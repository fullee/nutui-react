import React, { FunctionComponent } from 'react';
import { MenuItem } from '../../packages/menuitem/menuitem';
import { BasicComponent } from '../../utils/typings';
export interface MenuProps extends BasicComponent {
    /**
    * 选项的选中态图标颜色
    * @default #F2270C
    */
    activeColor: string
    /**
    * 是否在点击遮罩层后关闭菜单
    * @default true
    */
    closeOnOverlayClick: boolean
    /**
    * 滚动后是否固定，可设置固定位置
    * @default true
    */
    scrollFixed: boolean | string | number
    /**
    * 背景是否锁定
    * @default true
    */
    lockScroll: boolean
    /**
    * 自定义标题图标
    * @default -
    */
    icon: React.ReactNode
    children: React.ReactNode;
    onOpen: () => void;
    onClose: () => void;
}
export declare const Menu: FunctionComponent<Partial<MenuProps>> & {
    Item: typeof MenuItem;
};
