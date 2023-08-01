import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface CardProps extends BasicComponent {
    /**
    * 左侧图片 Url
    * @default -
    */
    src: string
    /**
    * 标题
    * @default -
    */
    title: string
    /**
    * 商品价格
    * @default -
    */
    price: string
    /**
    * 会员价格
    * @default -
    */
    vipPrice: string
    /**
    * 店铺介绍
    * @default -
    */
    shopDescription: string
    /**
    * 配送方式
    * @default -
    */
    delivery: string
    /**
    * 店铺名称
    * @default -
    */
    shopName: string
    /**
    * 自定义商品介绍
    * @default -
    */
    description: React.ReactNode
    /**
    * 店铺介绍自定义
    * @default -
    */
    tag: React.ReactNode
    /**
    * 价格后方自定义内容
    * @default -
    */
    priceTag: React.ReactNode
    /**
    * 右下角内容自定义
    * @default -
    */
    extra: React.ReactNode
}
export declare const Card: FunctionComponent<Partial<CardProps> & React.HTMLAttributes<HTMLDivElement>>;
