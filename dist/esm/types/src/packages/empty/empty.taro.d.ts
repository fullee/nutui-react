import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface EmptyProps extends BasicComponent {
    image?: ReactNode;
    imageSize: number | string;
    description: ReactNode;
    status: 'empty' | 'error' | 'network';
}
export declare const Empty: FunctionComponent<Partial<EmptyProps> & React.HTMLAttributes<HTMLDivElement>>;
