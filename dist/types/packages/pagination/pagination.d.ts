import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface PaginationProps extends BasicComponent {
    /**
    * 当前页码，受控值，与 onChange 搭配使用
    * @default -
    */
    value: number
    /**
    * 默认页码，非受控
    * @default 1
    */
    defaultValue: number
    /**
    * 显示模式
    * @default multi
    */
    mode: 'multi' | 'simple'
    /**
    * 自定义上一页按钮内容
    * @default 上一页
    */
    prev: ReactNode
    /**
    * 自定义下一页按钮内容
    * @default 下一页
    */
    next: ReactNode
    /**
    * 总记录数
    * @default 50
    */
    total: number
    /**
    * 每页记录数
    * @default 10
    */
    pageSize: number
    /**
    * 显示的页码个数
    * @default 5
    */
    itemSize: number
    /**
    * 是否显示省略号
    * @default false
    */
    ellipse: boolean
    /**
    * 用于自定义页码的结构
    * @default -
    */
    itemRender: (page: any) => ReactNode
    /**
    * 页码改变时触发
    * @default -
    */
    onChange: (currPage: number) => void
}
export declare const Pagination: FunctionComponent<Partial<PaginationProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>>;
