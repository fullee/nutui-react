import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface BadgeProps extends BasicComponent {
    value: ReactNode;
    dot: boolean;
    max: number;
    top: string;
    right: string;
    color: string;
}
export declare const Badge: FunctionComponent<Partial<BadgeProps>>;
