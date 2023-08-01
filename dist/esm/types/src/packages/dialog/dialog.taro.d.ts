import React from 'react';
import { BasicDialogProps } from './config';
export type DialogProps = BasicDialogProps;
export declare const BaseDialog: React.ForwardRefExoticComponent<Partial<BasicDialogProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick" | "content" | "title"> & React.RefAttributes<unknown>>;
