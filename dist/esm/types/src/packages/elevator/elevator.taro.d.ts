import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export declare const elevatorContext: React.Context<ElevatorData>;
export interface ElevatorProps extends BasicComponent {
    height: number | string;
    floorKey: string;
    list: any[];
    sticky: boolean;
    spaceHeight: number;
    titleHeight: number;
    showKeys: boolean;
    onItemClick: (key: string, item: ElevatorData) => void;
    onIndexClick: (key: string) => void;
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
