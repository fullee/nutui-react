import React from 'react';
import type { MouseEvent } from 'react';
import { ButtonProps as MiniProgramButtonProps } from '@tarojs/components';
import { BasicComponent } from '@/utils/typings';
type OmitMiniProgramButtonProps = Omit<MiniProgramButtonProps, 'size' | 'type' | 'onClick' | 'style'>;
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small';
export type ButtonShape = 'square' | 'round';
export type ButtonFill = 'solid' | 'outline' | 'none';
export interface ButtonProps extends BasicComponent, OmitMiniProgramButtonProps {
    color: string;
    shape: ButtonShape;
    type: ButtonType;
    size: ButtonSize;
    fill: ButtonFill;
    block: boolean;
    loading: boolean;
    disabled: boolean;
    icon: React.ReactNode;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: React.ForwardRefExoticComponent<Omit<Partial<ButtonProps>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
