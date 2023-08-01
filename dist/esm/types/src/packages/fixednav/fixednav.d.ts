import React, { FunctionComponent, MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type FixedNavDirection = 'right' | 'left';
export type FixedNavPosition = {
    top?: string;
    bottom?: string;
};
export interface FixedNavProps extends BasicComponent {
    visible: boolean;
    overlay: boolean;
    list: Array<any>;
    activeText: string;
    inactiveText: string;
    position: FixedNavPosition;
    type: FixedNavDirection;
    onChange: (item: any) => void;
    onSelect: (item: any, event: MouseEvent) => void;
    content: React.ReactNode;
}
export declare const FixedNav: FunctionComponent<Partial<FixedNavProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect' | 'content'>>;
