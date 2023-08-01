import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
import CellGroup from '../../packages/cellgroup';
export interface CellProps extends BasicComponent {
    /**
    * 标题
    * @default -
    */
    title: ReactNode
    /**
    * 描述
    * @default -
    */
    description: ReactNode
    /**
    * 右侧描述
    * @default -
    */
    extra: ReactNode
    /**
    * 圆角半径
    * @default 6px
    */
    radius: string | number
    /**
    * 纵轴方向上的对齐方式，可选值为：flex-start、center、flex-end
    * @default flex-start
    */
    align: string
    /**
    * 点击事件
    * @default false
    */
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export declare const Cell: FunctionComponent<Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>> & {
    Group: typeof CellGroup;
};
