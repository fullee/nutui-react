import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface EmptyProps extends BasicComponent {
    /**
    * 图片,支持传入图片 URL
    * @default -
    */
    image?: ReactNode
    /**
    * 图片大小，number 类型单位为 px
    * @default -
    */
    imageSize: number | string
    /**
    * 图片下方的描述文字
    * @default -
    */
    description: ReactNode
    /**
    * 默认图片错误类型
    * @default empty
    */
    status: 'empty' | 'error' | 'network'
}
export declare const Empty: FunctionComponent<Partial<EmptyProps> & React.HTMLAttributes<HTMLDivElement>>;
