import { FunctionComponent, ReactNode } from 'react';
import { Data } from './type';
import { BasicComponent } from '@/utils/typings';
export interface VirtualListProps extends BasicComponent {
    list: Array<Data>;
    containerHeight: number;
    itemRender: (data: any, dataIndex: number, index: number) => ReactNode;
    itemHeight: number;
    itemEqual: boolean;
    overscan: number;
    onScroll: () => void;
    key: string;
}
export declare const VirtualList: FunctionComponent<Partial<VirtualListProps>>;
