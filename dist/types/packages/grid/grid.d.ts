import React, { CSSProperties, FunctionComponent } from 'react';
import { GridItem, GridItemProps } from '../griditem/griditem';
export type GridDirection = 'horizontal' | 'vertical';
export interface GridProps {
    /**
    * 列数
    * @default 4
    */
    columns: string | number
    /**
    * 格子之间的间距，默认单位为px
    * @default 0
    */
    gap: string | number
    /**
    * 是否将格子内容居中显示
    * @default true
    */
    center: boolean
    /**
    * 是否将格子固定为正方形
    * @default false
    */
    square: boolean
    /**
    * 内容翻转
    * @default false
    */
    reverse: boolean
    /**
    * 格子内容排列的方向
    * @default vertical
    */
    direction: GridDirection
    className?: string;
    style?: CSSProperties;
    /**
    * 宫格子项点击事件
    * @default -
    */
    onClick: (item: GridItemProps, index: number) => void
}
export declare const Grid: FunctionComponent<Partial<GridProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>> & {
    Item: typeof GridItem;
};
