import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface BadgeProps extends BasicComponent {
    /**
    * 显示的内容，支持数字、字符和自定义内容
    * @default -
    */
    value: ReactNode
    /**
    * 是否为小点
    * @default false
    */
    dot: boolean
    /**
    * value 为数值时，最大值
    * @default 99
    */
    max: number
    /**
    * 上下偏移量，支持单位设置，可设置为：5 等
    * @default 0
    */
    top: string
    /**
    * 左右偏移量，支持单位设置，可设置为：5 等
    * @default 0
    */
    right: string
    /**
    * 徽标背景颜色,默认值为当前主题色
    * @default -
    */
    color: string
}
export declare const Badge: FunctionComponent<Partial<BadgeProps>>;
