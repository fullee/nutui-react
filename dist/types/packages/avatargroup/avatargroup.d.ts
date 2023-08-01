import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface AvatarGroupProps extends BasicComponent {
    /**
    * 头像数量超出时，会出现一个头像折叠元素。该元素内容可为...、more、+N。
    * @default -
    */
    maxContent: string
    /**
    * 显示的最大头像个数
    * @default -
    */
    max: string | number
    /**
    * 设置 Icon、字符类型头像的背景色
    * @default #eee
    */
    maxBackground: string
    /**
    * 设置 Icon、字符类型头像的颜色
    * @default #666
    */
    maxColor: string
    /**
    * 设置头像的大小，可选值为：large、normal、small，支持直接输入数字
    * @default -
    */
    size: 'large' | 'normal' | 'small'
    /**
    * 设置头像的形状
    * @default -
    */
    shape: 'round' | 'square'
    /**
    * 设置头像之间的间距
    * @default -8
    */
    gap: string
    /**
    * 头像之间的层级关系，可选值为：left、right
    * @default left
    */
    level: 'left' | 'right'
}
export declare const AvatarGroup: FunctionComponent<Partial<AvatarGroupProps> & React.HTMLAttributes<HTMLDivElement>>;
