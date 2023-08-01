import { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface ImagePreviewProps extends BasicComponent {
    /**
    * 预览图片数组
    * @default []
    */
    images: Array<{
        src: string;
    }>
    /**
    * 预览的视频数组（视频自动放到图片之前）
    * @default []
    */
    videos: Array<{
        source: {
            src: string;
            type: string;
        };
        options: {
            muted: boolean;
            controls: boolean;
        };
    }>
    /**
    * 是否展示预览图片
    * @default false
    */
    visible: boolean
    /**
    * 自动轮播时长，0表示不会自动轮播
    * @default 3000
    */
    autoPlay: number | string
    /**
    * 页码，受控
    * @default 1
    */
    value?: number
    /**
    * 初始页码
    * @default 1
    */
    defaultValue: number
    /**
    * 点击图片可以退出预览
    * @default false
    */
    closeOnContentClick: boolean
    /**
    * 分页指示器是否展示
    * @default false
    */
    indicator: boolean
    /**
    * 分页指示器选中的颜色
    * @default #fff
    */
    indicatorColor: string
    onChange: (value: number) => void;
    /**
    * 点击遮罩关闭图片预览时触发
    * @default -
    */
    onClose: () => void
}
export declare const ImagePreview: FunctionComponent<Partial<ImagePreviewProps>>;
