import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface VideoProps extends BasicComponent {
    /**
    * 视频地址和类型设置
    * @default {type: {}, src: ''}
    */
    source: {
        type: string;
        src: string;
    }
    /**
    * 控制视频播放属性
    * @default -
    */
    options: {
        controls?: boolean;
        muted?: boolean;
        autoplay?: boolean;
        poster?: string;
        playsinline?: boolean;
        loop?: boolean;
    }
    /**
    * 播放
    * @default -
    */
    onPlay: (element: HTMLVideoElement) => void
    /**
    * 暂停
    * @default -
    */
    onPause: (element: HTMLVideoElement) => void
    /**
    * 播放完成回调
    * @default -
    */
    onPlayEnd: (element: HTMLVideoElement) => void
}
export declare const Video: FunctionComponent<Partial<VideoProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onPause' | 'onPlay'>>;
