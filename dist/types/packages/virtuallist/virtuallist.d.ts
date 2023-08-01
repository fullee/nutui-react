import { FunctionComponent, ReactNode } from 'react';
import type { Data } from './type';
import { BasicComponent } from '../../utils/typings';
export interface VirtualListProps extends BasicComponent {
    /**
    * 获取数据
    * @default -
    */
    list: Array<Data>
    /**
    * 容器高度
    * @default 获取元素的 offsetWidth 或 offsetHeight，需要 css 给出
    */
    containerHeight: number
    /**
    * virtual 列表父节点渲染的函数
    * @default -
    */
    itemRender: (data: any, dataIndex: number, index: number) => ReactNode
    /**
    * item 高度，如果不定高，则为首屏单个最大 height
    * @default 66
    */
    itemHeight: number
    /**
    * item 高度是否一致
    * @default true
    */
    itemEqual: boolean
    /**
    * vertical、horizontal
    * @default vertical
    */
    direction: 'vertical' | 'horizontal'
    /**
    * 除了视窗里面默认的元素, 还需要额外渲染的 item 个数
    * @default 2
    */
    overscan: number
    /**
    * 滑动到底(右)的事件，可以实现无限滚动
    * @default -
    */
    onScroll: () => void
    /**
    * 用于指定 list 数据每一项的唯一 key 的字段名，默认取下标
    * @default -
    */
    key: string
}
export declare const VirtualList: FunctionComponent<Partial<VirtualListProps>>;
