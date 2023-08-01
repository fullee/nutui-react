import React, { ForwardRefRenderFunction } from 'react';
import { AddressList } from './type';
import { CascaderOption, CascaderOptionKey, CascaderProps, CascaderValue } from '../../packages/cascader/index';
type AddressRef = {
    open: () => void;
    close: () => void;
};
export interface AddressProps extends CascaderProps {
    /**
    * 是否打开地址选择
    * @default -
    */
    visible: boolean
    /**
    * 初始地址选择打开/关闭状态
    * @default -
    */
    defaultVisible: boolean
    value?: CascaderValue;
    defaultValue?: CascaderValue;
    /**
    * 地址选择类型 exist/custom
    * @default custom
    */
    type: string
    options: CascaderOption[];
    optionKey: CascaderOptionKey;
    format: Record<string, string | number | null>;
    /**
    * 是否可以切换自定义地址选择，type='exist' 时生效
    * @default true
    */
    custom: boolean | string
    /**
    * 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下）
    * @default []
    */
    existList: AddressList[]
    height: string | number;
    /**
    * 已有地址列表默认图标，type='exist' 时生效
    * @default -
    */
    defaultIcon: React.ReactNode
    /**
    * 已有地址列表选中图标，type='exist' 时生效
    * @default -
    */
    selectIcon: React.ReactNode
    /**
    * 自定义地址与已有地址切换时，自定义返回的按钮图标
    * @default -
    */
    backIcon: React.ReactNode
    /**
    * 点击'选择其他地址'或自定义地址选择左上角返回按钮触发
    * @default -
    */
    onSwitch?: (data: {
        type: string;
    }) => void
    /**
    * 选择已有地址列表时触发
    * @default -
    */
    onExistSelect?: (data: AddressList) => void
}
export declare const InternalAddress: ForwardRefRenderFunction<AddressRef, Partial<AddressProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue' | 'onLoad' | 'title'>>;
export declare const Address: React.ForwardRefExoticComponent<Partial<AddressProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "defaultValue" | "onChange" | "onLoad"> & React.RefAttributes<AddressRef>>;
export {};
