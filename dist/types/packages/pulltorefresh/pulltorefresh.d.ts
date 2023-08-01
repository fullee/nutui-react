import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete';
export interface PullToRefreshProps extends BasicComponent {
    /**
    * 触发刷新时的处理函数
    * @default -
    */
    onRefresh: () => Promise<any>
    /**
    * 下拉的提示文案
    * @default 下拉刷新
    */
    pullingText: ReactNode
    /**
    * 释放的提示文案
    * @default 释放立即刷新
    */
    canReleaseText: ReactNode
    /**
    * 刷新时的提示文案
    * @default 加载中……
    */
    refreshingText: ReactNode
    /**
    * 完成时的提示文案
    * @default 刷新成功
    */
    completeText: ReactNode
    /**
    * 完成后延迟消失的时间，单位为 ms
    * @default 500
    */
    completeDelay: number
    /**
    * 头部提示内容区的高度，单位为 px
    * @default 40
    */
    headHeight: number
    /**
    * 触发刷新需要下拉多少距离，单位为 px
    * @default 60
    */
    threshold: number
    /**
    * 是否禁用下拉刷新
    * @default false
    */
    disabled: boolean
    /**
    * 根据下拉状态，自定义下拉提示文案
    * @default -
    */
    renderText: (status: PullStatus) => ReactNode
}
export declare const PullToRefresh: FunctionComponent<Partial<PullToRefreshProps>>;
