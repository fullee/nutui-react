import React, { FunctionComponent } from 'react';
import { AnimateType, AnimateAction } from './type';
import { BasicComponent } from '@/utils/typings';
export interface AnimateProps extends BasicComponent {
    type: AnimateType;
    action: AnimateAction;
    loop: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export declare const Animate: FunctionComponent<Partial<AnimateProps> & React.HTMLAttributes<HTMLDivElement>>;
