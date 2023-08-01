import React, { ForwardRefRenderFunction } from 'react';
import { AddressList } from './type';
import { CascaderOption, CascaderOptionKey, CascaderProps, CascaderValue } from '@/packages/cascader/index';
type AddressRef = {
    open: () => void;
    close: () => void;
};
export interface AddressProps extends CascaderProps {
    visible: boolean;
    defaultVisible: boolean;
    value?: CascaderValue;
    defaultValue?: CascaderValue;
    type: string;
    options: CascaderOption[];
    optionKey: CascaderOptionKey;
    format: Record<string, string | number | null>;
    custom: boolean | string;
    existList: AddressList[];
    height: string | number;
    defaultIcon: React.ReactNode;
    selectIcon: React.ReactNode;
    backIcon: React.ReactNode;
    onSwitch?: (data: {
        type: string;
    }) => void;
    onExistSelect?: (data: AddressList) => void;
}
export declare const InternalAddress: ForwardRefRenderFunction<AddressRef, Partial<AddressProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue' | 'onLoad' | 'title'>>;
export declare const Address: React.ForwardRefExoticComponent<Partial<AddressProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "defaultValue" | "onChange" | "onLoad"> & React.RefAttributes<AddressRef>>;
export {};
