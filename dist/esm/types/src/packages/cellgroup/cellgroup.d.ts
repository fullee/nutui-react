import { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface CellGroupProps extends BasicComponent {
    title: ReactNode;
    description: ReactNode;
    children?: ReactNode;
    divider: boolean;
}
export declare const CellGroup: FunctionComponent<Partial<CellGroupProps>>;
