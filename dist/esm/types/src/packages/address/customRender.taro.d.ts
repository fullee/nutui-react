import React, { FunctionComponent } from 'react';
import { CascaderProps, CascaderOption, CascaderValue, CascaderOptionKey } from '@/packages/cascader/index.taro';
export interface AddressProps extends CascaderProps {
    visible: boolean;
    type: string;
    options: CascaderOption[];
    value?: CascaderValue;
    defaultValue?: CascaderValue;
    optionKey: CascaderOptionKey;
    format: Record<string, string | number | null>;
    height: string | number;
}
export declare const CustomRender: FunctionComponent<Partial<AddressProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'defaultValue' | 'onChange'>>;
