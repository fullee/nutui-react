import React from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small';
export type ButtonShape = 'square' | 'round';
export type ButtonFill = 'solid' | 'outline' | 'none';
export interface ButtonProps extends BasicComponent {
    color: string;
    shape: ButtonShape;
    type: ButtonType;
    size: ButtonSize;
    fill: ButtonFill;
    block: boolean;
    loading: boolean;
    disabled: boolean;
    icon: React.ReactNode;
    id: string;
    nativeType: 'submit' | 'reset' | 'button';
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: React.ForwardRefExoticComponent<Partial<ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
