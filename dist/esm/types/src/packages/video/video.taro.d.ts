import React, { FunctionComponent } from 'react';
import { BaseEventOrig } from '@tarojs/components';
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
    onPlay: (event: BaseEventOrig<any>) => void;
    onPause: (event: BaseEventOrig<any>) => void;
    onPlayEnd: (event: BaseEventOrig<any>) => void;
}
export declare const Video: FunctionComponent<Partial<VideoProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onPause' | 'onPlay'>>;
