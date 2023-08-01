import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface PaginationProps extends BasicComponent {
    defaultValue: number;
    value: number;
    mode: 'multi' | 'simple';
    prev: ReactNode;
    next: ReactNode;
    total: number;
    pageSize: number;
    itemSize: number;
    ellipse: boolean;
    itemRender: (page: any) => ReactNode;
    onChange: (currPage: number) => void;
}
export declare const Pagination: FunctionComponent<Partial<PaginationProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>>;
