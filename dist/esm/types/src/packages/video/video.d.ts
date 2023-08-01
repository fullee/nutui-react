import React, { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface VideoProps extends BasicComponent {
    source: {
        type: string;
        src: string;
    };
    options: {
        controls?: boolean;
        muted?: boolean;
        autoplay?: boolean;
        poster?: string;
        playsinline?: boolean;
        loop?: boolean;
    };
    onPlay: (element: HTMLVideoElement) => void;
    onPause: (element: HTMLVideoElement) => void;
    onPlayEnd: (element: HTMLVideoElement) => void;
}
export declare const Video: FunctionComponent<Partial<VideoProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onPause' | 'onPlay'>>;
