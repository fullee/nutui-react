import React, { FunctionComponent } from 'react';
interface TabPanelInnerProps {
    autoHeightClassName: string;
}
export interface TabPaneProps {
    /**
    * 标题
    * @default -
    */
    title: string | number
    /**
    * 标签 Key , 匹配的标识符, 默认为索引值
    * @default -
    */
    value: string | number
    /**
    * 是否禁用标签
    * @default false
    */
    disabled: boolean
    className: string;
    children?: React.ReactNode;
}
export declare const TabPane: FunctionComponent<Partial<TabPaneProps & TabPanelInnerProps>>;
export {};
