import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface AvatarGroupProps extends BasicComponent {
    maxContent: string;
    max: string | number;
    maxBackground: string;
    maxColor: string;
    size: 'large' | 'normal' | 'small';
    shape: 'round' | 'square';
    gap: string;
    level: 'left' | 'right';
}
export declare const AvatarGroup: FunctionComponent<Partial<AvatarGroupProps> & React.HTMLAttributes<HTMLDivElement>>;
