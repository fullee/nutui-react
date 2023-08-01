import React, { FunctionComponent } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
import AvatarGroup from '@/packages/avatargroup/index.taro';
export interface AvatarProps extends BasicComponent {
    size: string;
    icon: React.ReactNode;
    shape: AvatarShape;
    background: string;
    color: string;
    fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    src: string;
    alt: string;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
    onError: () => void;
}
export type AvatarShape = 'round' | 'square';
export declare const Avatar: FunctionComponent<Partial<AvatarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>> & {
    Group: typeof AvatarGroup;
};
