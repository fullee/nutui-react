import React, { FunctionComponent } from 'react';
import type { SyntheticEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface AudioProps extends BasicComponent {
    /**
    * 语音资源链接
    * @default -
    */
    src: string
    /**
    * 是否静音
    * @default false
    */
    muted: boolean
    /**
    * 是否自动播放
    * @default false
    */
    autoPlay: boolean
    /**
    * 是否循环播放
    * @default false
    */
    loop: boolean
    /**
    * 是否预加载语音
    * @default auto
    */
    preload: string
    /**
    * 展示形式，可选值：controls 控制面板 progress 进度条 icon 图标 none 自定义
    * @default progress
    */
    type: string
    /**
    * 语音快退回调，type = progress 时生效
    * @default -
    */
    onBack: (e: HTMLAudioElement) => void
    /**
    * 语音快进回调，type = progress 时生效
    * @default -
    */
    onForward: (e: HTMLAudioElement) => void
    /**
    * 暂停回调
    * @default -
    */
    onPause: (e: SyntheticEvent<HTMLAudioElement>) => void
    /**
    * 语音播放完成，loop = false 时生效
    * @default -
    */
    onEnd: (e: SyntheticEvent<HTMLAudioElement>) => void
    /**
    * 静音回调
    * @default -
    */
    onMute: (e: HTMLAudioElement) => void
    /**
    * 可以播放媒体时触发
    * @default -
    */
    onCanPlay: (e: SyntheticEvent<HTMLAudioElement>) => void
}
export declare const Audio: FunctionComponent<Partial<AudioProps> & React.HTMLAttributes<HTMLElement>>;
