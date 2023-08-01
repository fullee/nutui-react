import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface WaterMarkProps extends BasicComponent {
    content: string;
    fullPage: boolean;
    zIndex: number;
    gapX: number;
    gapY: number;
    width: number;
    height: number;
    image: string;
    imageWidth: number;
    imageHeight: number;
    rotate: number;
    color: string;
    fontStyle: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string | number;
}
export declare const WaterMark: FunctionComponent<Partial<WaterMarkProps> & React.HTMLAttributes<HTMLDivElement>>;
