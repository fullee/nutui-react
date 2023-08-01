import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface ImageProps extends BasicComponent {
    src: string;
    fit: ImageFit;
    position: ImagePosition;
    alt: string;
    width: string;
    height: string;
    radius: string | number;
    error: boolean | ReactNode;
    loading: boolean | ReactNode;
    lazy: boolean;
    onClick: (e: MouseEvent) => void;
    onLoad: () => void;
    onError: () => void;
}
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | string;
export type ImagePosition = 'center' | 'top' | 'right' | 'bottom' | 'left' | string;
export declare const Image: FunctionComponent<Partial<ImageProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onLoad' | 'onError'>>;
