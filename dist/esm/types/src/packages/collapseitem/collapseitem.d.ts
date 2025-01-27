import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface CollapseItemProps extends BasicComponent {
    title: ReactNode;
    name: string;
    expandIcon: ReactNode;
    disabled: boolean;
    rotate: number;
    extra: ReactNode;
}
export declare const CollapseItem: FunctionComponent<Partial<CollapseItemProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>>;
