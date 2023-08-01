import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
import CollapseItem from '../collapseitem/index.taro';
type keyType = Array<string> | string;
export interface CollapseProps extends BasicComponent {
    activeName: keyType;
    defaultActiveName: keyType;
    accordion: boolean;
    expandIcon: ReactNode;
    rotate: number;
    onChange: (activeName: keyType, name: string, isOpen: boolean) => void;
}
export declare const Collapse: FunctionComponent<Partial<CollapseProps>> & {
    Item: typeof CollapseItem;
};
export {};
