import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
import { CellGroup } from '@/packages/cellgroup/cellgroup.taro';
export interface CellProps extends BasicComponent {
    title: ReactNode;
    description: ReactNode;
    extra: ReactNode;
    radius: string | number;
    align: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export declare const Cell: FunctionComponent<Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>> & {
    Group: typeof CellGroup;
};
