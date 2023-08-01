import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete';
export interface PullToRefreshProps extends BasicComponent {
    onRefresh: () => Promise<any>;
    pullingText: ReactNode;
    canReleaseText: ReactNode;
    refreshingText: ReactNode;
    completeText: ReactNode;
    completeDelay: number;
    headHeight: number;
    threshold: number;
    disabled: boolean;
    scrollTop: number;
    renderText: (status: PullStatus) => ReactNode;
}
export declare const PullToRefresh: FunctionComponent<Partial<PullToRefreshProps>>;
