import React, { ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface FileType {
    jpg: string;
    png: string;
}
export interface SignatureProps extends BasicComponent {
    type: keyof FileType;
    lineWidth: number;
    strokeStyle: string;
    unsupported: ReactNode;
    onConfirm?: (canvas: HTMLCanvasElement, dataurl: string) => void;
    onClear?: () => void;
}
export declare const Signature: React.ForwardRefExoticComponent<Partial<SignatureProps> & React.RefAttributes<unknown>>;
