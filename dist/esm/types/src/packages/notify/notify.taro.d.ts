import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface NotifyProps extends BasicComponent {
    id?: string;
    duration: number;
    type: string;
    position: string;
    visible: boolean;
    onClose: () => void;
    onClick: () => void;
}
export declare const Notify: FunctionComponent<Partial<NotifyProps> & React.HTMLAttributes<HTMLDivElement>>;
