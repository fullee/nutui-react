import { FunctionComponent, ReactNode } from 'react';
import type { Data } from './type';
import { BasicComponent } from '@/utils/typings';
export interface VirtualListProps extends BasicComponent {
    list: Array<Data>;
    containerHeight: number;
    itemRender: (data: any, dataIndex: number, index: number) => ReactNode;
    itemHeight: number;
    itemEqual: boolean;
    direction: 'vertical' | 'horizontal';
    overscan: number;
    onScroll: () => void;
    key: string;
}
export declare const VirtualList: FunctionComponent<Partial<VirtualListProps>>;
