import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export declare const elevatorContext: React.Context<ElevatorData>;
export interface ElevatorProps extends BasicComponent {
    /**
    * 电梯区域的高度
    * @default 200px
    */
    height: number | string
    /**
    * 索引 key 值
    * @default title
    */
    floorKey: string
    /**
    * 索引列表
    * @default [{id: 0, name: ''}]
    */
    list: any[]
    /**
    * 索引是否吸顶
    * @default false
    */
    sticky: boolean
    /**
    * 右侧锚点的上下间距
    * @default 23
    */
    spaceHeight: number
    /**
    * 左侧索引的高度
    * @default 35
    */
    titleHeight: number
    /**
    * 展示右侧导航
    * @default true
    */
    showKeys: boolean
    /**
    * 点击内容
    * @default false
    */
    onItemClick: (key: string, item: ElevatorData) => void
    /**
    * 点击索引
    * @default false
    */
    onIndexClick: (key: string) => void
}
interface ElevatorData {
    name: string;
    id: number | string;
    [key: string]: string | number;
}
export declare const Elevator: FunctionComponent<Partial<ElevatorProps> & React.HTMLAttributes<HTMLDivElement>> & {
    Context: typeof elevatorContext;
};
export {};
