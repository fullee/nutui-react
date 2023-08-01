import React, { CSSProperties, FunctionComponent } from 'react';
import { InnerAudioContext } from '@tarojs/taro';
import { BasicComponent } from '@/utils/typings';
export interface AudioProps extends BasicComponent {
    className?: string;
    style?: CSSProperties;
    url: string;
    autoplay?: boolean;
    loop?: boolean;
    type: string;
    onFastBack?: (ctx: InnerAudioContext) => void;
    onForward?: (ctx: InnerAudioContext) => void;
    onPause?: any;
    onPlay?: any;
    onPlayEnd?: (ctx: InnerAudioContext) => void;
    onCanPlay?: (ctx: InnerAudioContext) => void;
}
export declare const Audio: FunctionComponent<Partial<AudioProps> & (React.HTMLAttributes<HTMLDivElement> | InnerAudioContext)>;
