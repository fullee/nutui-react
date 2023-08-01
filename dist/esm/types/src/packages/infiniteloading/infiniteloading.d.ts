import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface InfiniteLoadingProps extends BasicComponent {
    hasMore: boolean;
    threshold: number;
    target: string;
    capture: boolean;
    pullRefresh: boolean;
    pullingText: ReactNode;
    loadingText: ReactNode;
    loadMoreText: ReactNode;
    onRefresh: (param: () => void) => void;
    onLoadMore: (param: () => void) => void;
    onScroll: (param: number) => void;
}
export declare const InfiniteLoading: FunctionComponent<Partial<InfiniteLoadingProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onScroll'>>;
