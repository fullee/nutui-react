import React, { FunctionComponent } from 'react';
export interface IndicatorProps {
    /**
    * 步骤长度
    * @default 3
    */
    total: number
    /**
    * 当前步骤
    * @default 0
    */
    current: number
    /**
    * 展示方向，默认为水平方向
    * @default horizontal
    */
    direction: string
}
export declare const Indicator: FunctionComponent<Partial<IndicatorProps> & React.HTMLAttributes<HTMLDivElement>>;
