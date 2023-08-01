import React, { FunctionComponent, ReactNode } from 'react';
import { PopupProps } from '@/packages/popup/index.taro';
export type ItemType<T> = {
    [key: string]: T;
};
export interface ActionSheetProps extends PopupProps {
    visible: boolean;
    description: ReactNode;
    options: ItemType<string | boolean>[];
    optionKey: ItemType<string>;
    cancelText: ReactNode;
    onCancel: () => void;
    onSelect: (item: ItemType<string | boolean>, index: number) => void;
}
export declare const ActionSheet: FunctionComponent<Partial<ActionSheetProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onSelect' | 'onClick'>>;
