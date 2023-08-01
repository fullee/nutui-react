import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface StepsProps extends BasicComponent {
    /**
    * 当前所在的步骤
    * @default 0
    */
    value: number
    /**
    * 显示方向
    * @default horizontal
    */
    direction: string
    /**
    * 点状步骤条
    * @default false
    */
    dot: boolean
    onStepClick: (index: number) => void;
}
export declare const Steps: FunctionComponent<Partial<StepsProps> & React.HTMLAttributes<HTMLDivElement>>;
