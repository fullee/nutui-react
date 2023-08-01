import React, { FunctionComponent } from 'react';
import type { SyntheticEvent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface AudioProps extends BasicComponent {
    src: string;
    muted: boolean;
    autoPlay: boolean;
    loop: boolean;
    preload: string;
    type: string;
    onBack: (e: HTMLAudioElement) => void;
    onForward: (e: HTMLAudioElement) => void;
    onPause: (e: SyntheticEvent<HTMLAudioElement>) => void;
    onEnd: (e: SyntheticEvent<HTMLAudioElement>) => void;
    onMute: (e: HTMLAudioElement) => void;
    onCanPlay: (e: SyntheticEvent<HTMLAudioElement>) => void;
}
export declare const Audio: FunctionComponent<Partial<AudioProps> & React.HTMLAttributes<HTMLElement>>;
