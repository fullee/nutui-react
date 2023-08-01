import { FunctionComponent, ReactNode } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type TagType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
export interface TagProps extends BasicComponent {
    /**
    * 标签类型
    * @default default
    */
    type: TagType
    /**
    * 标签颜色
    * @default -
    */
    background: string
    /**
    * 文本颜色，优先级高于color属性
    * @default white
    */
    color: string
    /**
    * 是否为空心样式
    * @default false
    */
    plain: boolean
    /**
    * 是否为圆角样式
    * @default false
    */
    round: boolean
    /**
    * 是否为标记样式
    * @default false
    */
    mark: boolean
    /**
    * 是否为可关闭标签
    * @default false
    */
    closeable: boolean
    /**
    * 关闭按钮
    * @default null
    */
    closeIcon: ReactNode
    /**
    * 点击事件
    * @default -
    */
    onClick: (e: MouseEvent<HTMLDivElement>) => void
    /**
    * 关闭事件
    * @default -
    */
    onClose: (e?: any) => void
}
export declare const Tag: FunctionComponent<Partial<TagProps>>;
