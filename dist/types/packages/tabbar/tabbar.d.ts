import { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
import TabbarItem from '../tabbaritem';
export interface TabbarProps extends BasicComponent {
    /**
    * 默认选中的标签的索引值
    * @default 0
    */
    defaultValue: number
    /**
    * 选中的标签的索引值
    * @default -
    */
    value?: number
    /**
    * 是否固定在页面底部，为 true 时默认开启 safeArea
    * @default false
    */
    fixed: boolean
    /**
    * icon未激活的颜色
    * @default #7d7e80
    */
    inactiveColor: string
    /**
    * icon激活的颜色
    * @default #1989fa
    */
    activeColor: string
    /**
    * 是否开启iphone系列全面屏底部安全区适配
    * @default false
    */
    safeArea: boolean
    /**
    * 切换页签时触发事件
    * @default -
    */
    onSwitch: (value: number) => void
}
export declare const Tabbar: FunctionComponent<Partial<TabbarProps>> & {
    Item: typeof TabbarItem;
};
