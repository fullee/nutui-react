import { FunctionComponent, ReactNode } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type TagType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
export interface TagProps extends BasicComponent {
    type: TagType;
    background: string;
    color: string;
    plain: boolean;
    round: boolean;
    mark: boolean;
    closeable: boolean;
    closeIcon: ReactNode;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
    onClose: (e?: any) => void;
}
export declare const Tag: FunctionComponent<Partial<TagProps>>;
