import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface TabbarItemProps extends BasicComponent {
    /**
    * 标签页的标题
    * @default -
    */
    title: ReactNode
    /**
    * 自定义图标
    * @default -
    */
    icon: ReactNode
    active: boolean;
    activeColor: string;
    inactiveColor: string;
    index: number;
    /**
    * 徽标中显示的内容，支持数字、字符和自定义内容
    * @default -
    */
    value: ReactNode
    /**
    * 徽标是否为小点
    * @default false
    */
    dot: boolean
    /**
    * value 为数值时，最大值
    * @default 99
    */
    max: number
    /**
    * 徽标的上下偏移量，支持单位设置，可设置为：5 等
    * @default 0
    */
    top: string
    /**
    * 徽标的左右偏移量，支持单位设置，可设置为：5 等
    * @default 0
    */
    right: string
    handleClick: (idx: number) => void;
}
export declare const TabbarItem: FunctionComponent<Partial<TabbarItemProps>>;
