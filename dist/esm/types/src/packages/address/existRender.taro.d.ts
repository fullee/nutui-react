import React, { FunctionComponent, ReactNode } from 'react';
import { AddressList } from './type';
export interface ExistRenderProps {
    type: string;
    existList: AddressList[] | [];
    defaultIcon: ReactNode;
    selectIcon: ReactNode;
    custom: boolean | string;
    onSelect?: (item: AddressList) => void;
    onSwitch?: (cal: {
        type: string;
    }) => void;
}
export declare const ExistRender: FunctionComponent<Partial<ExistRenderProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'title' | 'onSelect'>>;
