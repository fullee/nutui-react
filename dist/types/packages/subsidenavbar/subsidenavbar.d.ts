import React, { FunctionComponent } from 'react';
export type SubSideNavBarProps = {
    title: string;
    value: string | number;
    open?: boolean;
    children?: React.ReactNode;
    onClick?: ({ title, value, isShow, }: {
        title: string;
        value: string | number;
        isShow: boolean;
    }) => void;
};
export declare const SubSideNavBar: FunctionComponent<SubSideNavBarProps>;
