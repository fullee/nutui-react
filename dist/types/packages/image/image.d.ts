import React, { FunctionComponent, ReactNode } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface ImageProps extends BasicComponent {
    /**
    * 图片链接
    * @default -
    */
    src: string
    /**
    * 图片填充模式，等同于原生的 object-fit 属性
    * @default fill
    */
    fit: ImageFit
    /**
    * 图片位置，等同于原生的 object-position 属性
    * @default center
    */
    position: ImagePosition
    /**
    * 替代文本
    * @default -
    */
    alt: string
    /**
    * 宽度，默认单位px
    * @default -
    */
    width: string
    /**
    * 高度，默认单位px
    * @default -
    */
    height: string
    /**
    * 圆角大小
    * @default -
    */
    radius: string | number
    /**
    * 是否展示图片加载失败
    * @default true
    */
    error: boolean | ReactNode
    /**
    * 是否展示加载中图片
    * @default true
    */
    loading: boolean | ReactNode
    /**
    * 是否为懒加载图片
    * @default false
    */
    lazy: boolean
    /**
    * 点击图片时触发
    * @default -
    */
    onClick: (e: MouseEvent) => void
    /**
    * 图片加载完后触发
    * @default -
    */
    onLoad: () => void
    /**
    * 图片加载失败后触发
    * @default -
    */
    onError: () => void
}
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | string;
export type ImagePosition = 'center' | 'top' | 'right' | 'bottom' | 'left' | string;
export declare const Image: FunctionComponent<Partial<ImageProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onLoad' | 'onError'>>;
