import React from 'react';
import { BasicComponent } from '@/utils/typings';
export interface FileType {
    jpg: string;
    png: string;
}
export interface SignatureProps extends BasicComponent {
    canvasId: string;
    type: keyof FileType;
    lineWidth: number;
    strokeStyle: string;
    unSupportTpl: string;
    onConfirm?: (dataurl: string) => void;
    onClear?: () => void;
}
export declare const Signature: React.ForwardRefExoticComponent<Partial<SignatureProps> & React.RefAttributes<unknown>>;
