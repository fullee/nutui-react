import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface WaterMarkProps extends BasicComponent {
    /**
    * 水印文字内容
    * @default -
    */
    content: string
    /**
    * 是否覆盖整个页面
    * @default true
    */
    fullPage: boolean
    /**
    * 追加的水印元素的 z-index
    * @default 2000
    */
    zIndex: number
    /**
    * 水印之间的水平间距
    * @default 24
    */
    gapX: number
    /**
    * 水印之间的垂直间距
    * @default 48
    */
    gapY: number
    /**
    * 水印的宽度
    * @default 120
    */
    width: number
    /**
    * 水印的高度
    * @default 64
    */
    height: number
    /**
    * 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印
    * @default -
    */
    image: string
    /**
    * 图片宽度
    * @default 120
    */
    imageWidth: number
    /**
    * 图片高度
    * @default 64
    */
    imageHeight: number
    /**
    * 水印绘制时，旋转的角度
    * @default -22
    */
    rotate: number
    /**
    * 水印文字颜色
    * @default rgba(0, 0, 0, .15)
    */
    color: string
    fontStyle: string;
    /**
    * 水印文字字体
    * @default -
    */
    fontFamily: string
    fontWeight: string;
    /**
    * 文字大小
    * @default 16
    */
    fontSize: string | number
}
export declare const WaterMark: FunctionComponent<Partial<WaterMarkProps> & React.HTMLAttributes<HTMLDivElement>>;
