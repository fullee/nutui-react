import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
import TabPane from '@/packages/tabpane';
export type TabsTitle = {
    title: string;
    disabled: boolean;
    active?: boolean;
    value: string | number;
};
export interface TabsProps extends BasicComponent {
    tabStyle: React.CSSProperties;
    value: string | number;
    defaultValue: string | number;
    activeColor: string;
    direction: 'horizontal' | 'vertical';
    activeType: 'line' | 'smile';
    duration: number | string;
    align: 'left' | 'right';
    title: () => JSX.Element[];
    onChange: (index: string | number) => void;
    onClick: (index: string | number) => void;
    autoHeight: boolean;
    children?: React.ReactNode;
}
export declare const Tabs: FunctionComponent<Partial<TabsProps>> & {
    TabPane: typeof TabPane;
};
