import React, { FunctionComponent } from 'react';
import type { MouseEvent } from 'react';
import { BasicComponent } from '../../utils/typings';
import AvatarGroup from '../../packages/avatargroup';
export interface AvatarProps extends BasicComponent {
    /**
    * 设置头像的大小
    * @default -
    */
    size: string
    /**
    * 设置 Icon 类型头像图标
    * @default -
    */
    icon: React.ReactNode
    /**
    * 图片填充模式
    * @default -
    */
    fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
    /**
    * 设置头像的形状
    * @default round
    */
    shape: AvatarShape
    /**
    * 设置 Icon、字符类型头像的背景色
    * @default #eee
    */
    background: string
    /**
    * 设置 Icon、字符类型头像的颜色
    * @default #666
    */
    color: string
    /**
    * 设置图片类型头像的地址
    * @default -
    */
    src: string
    /**
    * 设置图片类型头像无法显示时的替代文本
    * @default -
    */
    alt: string
    /**
    * 点击头像触发事件
    * @default -
    */
    onClick: (e: MouseEvent<HTMLDivElement>) => void
    /**
    * 图片加载失败的事件
    * @default -
    */
    onError: () => void
}
export type AvatarShape = 'round' | 'square';
export declare const Avatar: FunctionComponent<Partial<AvatarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>> & {
    Group: typeof AvatarGroup;
};
