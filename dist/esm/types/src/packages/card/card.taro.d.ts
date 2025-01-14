import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface CardProps extends BasicComponent {
    src: string;
    title: string;
    price: string;
    vipPrice: string;
    shopDescription: string;
    delivery: string;
    shopName: string;
    description: React.ReactNode;
    tag: React.ReactNode;
    priceTag: React.ReactNode;
    extra: React.ReactNode;
}
export declare const Card: FunctionComponent<Partial<CardProps> & React.HTMLAttributes<HTMLDivElement>>;
