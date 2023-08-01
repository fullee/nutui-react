import React, { FunctionComponent, ReactNode } from 'react';
import { PopupProps } from '../../packages/popup/index';
export type ItemType<T> = {
    [key: string]: T;
};
export interface ActionSheetProps extends PopupProps {
    /**
    * 遮罩层可见
    * @default false
    */
    visible: boolean
    /**
    * 设置列表面板副标题/描述
    * @default -
    */
    description: ReactNode
    /**
    * 列表项
    * @default []
    */
    options: ItemType<string | boolean>[]
    /**
    * 列表项的自定义设置
    * @default -
    */
    optionKey: ItemType<string>
    /**
    * 取消文案
    * @default 取消
    */
    cancelText: ReactNode
    /**
    * 点击取消文案时触发
    * @default -
    */
    onCancel: () => void
    /**
    * 选择之后触发
    * @default -
    */
    onSelect: (item: ItemType<string | boolean>, index: number) => void
}
export declare const ActionSheet: FunctionComponent<Partial<ActionSheetProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onSelect'>>;
