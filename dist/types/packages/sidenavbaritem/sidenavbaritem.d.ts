import React, { FunctionComponent } from 'react';
export type SideNavBarItemProps = {
    title: string;
    value: string | number;
    onClick?: ({ title, value, }: {
        title: string;
        value: string | number;
    }) => void;
    children?: React.ReactNode;
};
export declare const SideNavBarItem: FunctionComponent<SideNavBarItemProps>;
