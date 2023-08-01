import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface InfiniteLoadingProps extends BasicComponent {
    /**
    * 是否还有更多数据
    * @default true
    */
    hasMore: boolean
    /**
    * 距离底部多远加载
    * @default 200
    */
    threshold: number
    /**
    * 获取监听的目标元素
    * @default -
    */
    target: string
    /**
    * 是否使用捕获模式 true 捕获 false 冒泡
    * @default false
    */
    capture: boolean
    /**
    * 是否开启下拉刷新
    * @default false
    */
    pullRefresh: boolean
    /**
    * 下拉刷新提示文案
    * @default 松手刷新
    */
    pullingText: ReactNode
    /**
    * 上拉加载提示文案
    * @default 加载中...
    */
    loadingText: ReactNode
    /**
    * “没有更多数”据展示文案
    * @default 哎呀，这里是底部了啦
    */
    loadMoreText: ReactNode
    /**
    * 下拉刷新事件回调
    * @default -
    */
    onRefresh: (param: () => void) => void
    /**
    * 继续加载的回调函数
    * @default -
    */
    onLoadMore: (param: () => void) => void
    /**
    * 实时监听滚动高度
    * @default -
    */
    onScroll: (param: number) => void
}
export declare const InfiniteLoading: FunctionComponent<Partial<InfiniteLoadingProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onScroll'>>;
