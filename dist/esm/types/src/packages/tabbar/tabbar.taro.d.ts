import { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
import TabbarItem from '../tabbaritem/index.taro';
export interface TabbarProps extends BasicComponent {
    defaultValue: number;
    value?: number;
    fixed: boolean;
    inactiveColor: string;
    activeColor: string;
    safeArea: boolean;
    onSwitch: (value: number) => void;
}
export declare const Tabbar: FunctionComponent<Partial<TabbarProps>> & {
    Item: typeof TabbarItem;
};
