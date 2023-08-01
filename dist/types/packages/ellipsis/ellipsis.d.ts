import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type EllipsisDirection = 'start' | 'end' | 'middle';
export interface EllipsisProps extends BasicComponent {
    /**
    * 文本内容
    * @default -
    */
    content: string
    /**
    * 省略位置
    * @default end
    */
    direction: EllipsisDirection
    /**
    * 展示几行
    * @default 1
    */
    rows: number | string
    /**
    * 展开操作的文案
    * @default -
    */
    expandText: string
    /**
    * 收起操作的文案
    * @default -
    */
    collapseText: string
    /**
    * 省略的符号
    * @default ...
    */
    symbol: string
    /**
    * 容器的行高
    * @default 20
    */
    lineHeight: number | string
    /**
    * 文本点击是触发
    * @default -
    */
    onClick: () => void
    /**
    * 点击展开收起时触发
    * @default -
    */
    onChange: (type: string) => void
}
export declare const Ellipsis: FunctionComponent<Partial<EllipsisProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>>;
