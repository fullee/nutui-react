import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface TabbarItemProps extends BasicComponent {
    title: ReactNode;
    icon: ReactNode;
    active: boolean;
    activeColor: string;
    inactiveColor: string;
    index: number;
    value: ReactNode;
    dot: boolean;
    max: number;
    top: string;
    right: string;
    handleClick: (idx: number) => void;
}
export declare const TabbarItem: FunctionComponent<Partial<TabbarItemProps>>;
