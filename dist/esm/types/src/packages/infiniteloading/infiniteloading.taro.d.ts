import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface InfiniteLoadingProps extends BasicComponent {
    hasMore: boolean;
    threshold: number;
    target: string;
    pullRefresh: boolean;
    pullingText: ReactNode;
    loadingText: ReactNode;
    loadMoreText: string;
    onRefresh: (param: () => void) => void;
    onLoadMore: (param: () => void) => void;
    onScroll: (param: number) => void;
}
export declare const InfiniteLoading: FunctionComponent<Partial<InfiniteLoadingProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onScroll'>>;
