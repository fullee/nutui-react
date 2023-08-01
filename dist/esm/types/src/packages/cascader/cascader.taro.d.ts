import React from 'react';
import { PopupProps } from '@/packages/popup/popup.taro';
import { CascaderOption, CascaderValue, CascaderOptionKey } from './types';
export interface CascaderProps extends PopupProps {
    popup: boolean;
    visible: boolean;
    activeColor: string;
    activeIcon: string;
    options: CascaderOption[];
    value?: CascaderValue;
    defaultValue?: CascaderValue;
    optionKey: CascaderOptionKey;
    format: Record<string, string | number | null>;
    closeable: boolean;
    closeIconPosition: string;
    closeIcon: string;
    lazy: boolean;
    onLoad: (node: any, resolve: any) => void;
    onChange: (value: CascaderValue, params?: any) => void;
    onPathChange: (value: CascaderValue, params: any) => void;
}
export declare const Cascader: React.ForwardRefExoticComponent<Partial<CascaderProps> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
