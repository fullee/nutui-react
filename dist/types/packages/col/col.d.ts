import React, { FunctionComponent } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export type ColEventType = 'row' | 'col';
export interface ColProps extends BasicComponent {
    /**
    * 列元素宽度（共分为24份，例如设置一行3个，那么span值为8）
    * @default 24
    */
    span: string | number
    /**
    * 列元素偏移距离
    * @default 0
    */
    offset: string | number
    gutter: string | number;
    /**
    * 点击时触发
    * @default -
    */
    onClick: (e: MouseEvent<HTMLDivElement>, type: ColEventType) => void
}
export declare const Col: FunctionComponent<Partial<ColProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>>;
