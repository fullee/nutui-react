import React, { FunctionComponent } from 'react';
interface TabPanelInnerProps {
    autoHeightClassName: string;
}
export interface TabPaneProps {
    title: string | number;
    value: string | number;
    disabled: boolean;
    className: string;
    children?: React.ReactNode;
}
export declare const TabPane: FunctionComponent<Partial<TabPaneProps & TabPanelInnerProps>>;
export {};
