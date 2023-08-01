import { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
type avatarShape = 'round' | 'square';
export interface SkeletonProps extends BasicComponent {
    animated: boolean;
    rows: number;
    title: boolean;
    avatar: boolean;
    avatarSize: string;
    visible: boolean;
    avatarShape: avatarShape;
}
export declare const Skeleton: FunctionComponent<Partial<SkeletonProps>>;
export {};
