import * as React from 'react';
import { BasicComponent } from '@/utils/typings';
export interface NotifyProps extends BasicComponent {
    id: string;
    duration: number;
    type: string;
    position: string;
    onClick: () => void;
    onClose: () => void;
}
declare const _default: {
    text(message: string | React.ReactNode, option?: {}): void;
    success(message: string | React.ReactNode, option?: {}): void;
    primary(message: string | React.ReactNode, option?: {}): void;
    danger(message: string | React.ReactNode, option?: {}): void;
    warn(message: string | React.ReactNode, option?: {}): void;
    hide(): void;
};
export default _default;
