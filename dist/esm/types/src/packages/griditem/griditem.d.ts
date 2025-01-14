import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
type GridDirection = 'horizontal' | 'vertical';
export interface GridItemProps extends BasicComponent {
    text: string | ReactNode;
    index: number;
    columns: string | number;
    gap: string | number;
    center: boolean;
    square: boolean;
    reverse: boolean;
    direction: GridDirection;
}
export declare const GridItem: FunctionComponent<Partial<GridItemProps> & React.HTMLAttributes<HTMLDivElement>>;
export {};
