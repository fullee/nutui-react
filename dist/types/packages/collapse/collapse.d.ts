import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
import CollapseItem from '../collapseitem';
type keyType = Array<string> | string;
export interface CollapseProps extends BasicComponent {
    /**
    * 当前展开面板的 name，受控
    * @default -
    */
    activeName: keyType
    /**
    * 默认展开面板的 name，非受控
    * @default -
    */
    defaultActiveName: keyType
    /**
    * 是否开启手风琴模式
    * @default false
    */
    accordion: boolean
    /**
    * 自定义展开图标
    * @default -
    */
    expandIcon: ReactNode
    /**
    * 点击折叠和展开的旋转角度,在自定义图标模式下生效
    * @default 180
    */
    rotate: number
    onChange: (activeName: keyType, name: string, isOpen: boolean) => void;
}
export declare const Collapse: FunctionComponent<Partial<CollapseProps>> & {
    Item: typeof CollapseItem;
};
export {};
