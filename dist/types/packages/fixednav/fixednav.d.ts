import React, { FunctionComponent, MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type FixedNavDirection = 'right' | 'left';
export type FixedNavPosition = {
    top?: string;
    bottom?: string;
};
export interface FixedNavProps extends BasicComponent {
    /**
    * 是否打开
    * @default false
    */
    visible: boolean
    /**
    * 展开时是否显示遮罩
    * @default true
    */
    overlay: boolean
    /**
    * 悬浮列表内容数据
    * @default []
    */
    list: Array<any>
    /**
    * 收起列表按钮文案
    * @default 收起导航
    */
    activeText: string
    /**
    * 展开列表按钮文案
    * @default 快速导航
    */
    inactiveText: string
    /**
    * fixed 垂直位置
    * @default {top: 'auto', bottom: 'auto'}
    */
    position: FixedNavPosition
    /**
    * 导航方向
    * @default right
    */
    type: FixedNavDirection
    /**
    * 展开收起按钮回调
    * @default -
    */
    onChange: (item: any) => void
    /**
    * 选择之后触发
    * @default -
    */
    onSelect: (item: any, event: MouseEvent) => void
    /**
    * 自定义按钮
    * @default -
    */
    content: React.ReactNode
}
export declare const FixedNav: FunctionComponent<Partial<FixedNavProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect' | 'content'>>;
