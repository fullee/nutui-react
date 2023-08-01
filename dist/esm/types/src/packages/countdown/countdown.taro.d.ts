import React, { ReactNode } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface CountDownProps extends BasicComponent {
    paused: boolean;
    startTime: number;
    endTime: number;
    remainingTime: number;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
    time: number;
    destroy: boolean;
    onEnd: () => void;
    onPaused: (restTime: number) => void;
    onRestart: (restTime: number) => void;
    onUpdate: (restTime: any) => void;
    children: ReactNode;
}
export declare const CountDown: React.ForwardRefExoticComponent<Partial<CountDownProps> & React.RefAttributes<unknown>>;
