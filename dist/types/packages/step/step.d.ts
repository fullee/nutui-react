import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface StepProps extends BasicComponent {
    /**
    * 流程步骤的标题
    * @default -
    */
    title: ReactNode
    /**
    * 流程步骤的描述性文字
    * @default -
    */
    description: ReactNode
    /**
    * 流程步骤的索引
    * @default 0
    */
    value: number
    /**
    * 图标(来自Icon组件的name属性)
    * @default -
    */
    icon: ReactNode
}
export declare const Step: FunctionComponent<Partial<StepProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>>;
