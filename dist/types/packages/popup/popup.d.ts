import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';
import { OverlayProps } from '../../packages/overlay/overlay';
type Teleport = HTMLElement | (() => HTMLElement) | null;
export interface PopupProps extends OverlayProps {
    /**
    * 弹出位置
    * @default center
    */
    position: string
    /**
    * 动画名
    * @default -
    */
    transition: string
    /**
    * 自定义遮罩样式
    * @default -
    */
    overlayStyle: React.CSSProperties
    /**
    * 自定义遮罩类名
    * @default -
    */
    overlayClassName: string
    /**
    * 是否显示关闭按钮
    * @default false
    */
    closeable: boolean
    /**
    * 关闭按钮位置
    * @default top-right
    */
    closeIconPosition: string
    /**
    * 自定义 Icon
    * @default close
    */
    closeIcon: ReactNode
    left: ReactNode;
    title: ReactNode;
    /**
    * 组件不可见时，卸载内容
    * @default false
    */
    destroyOnClose: boolean
    /**
    * 指定节点挂载
    * @default null
    */
    portal: Teleport
    /**
    * 是否显示遮罩
    * @default true
    */
    overlay: boolean
    /**
    * 是否显示圆角
    * @default false
    */
    round: boolean
    /**
    * 打开弹框时触发
    * @default -
    */
    onOpen: () => void
    /**
    * 关闭弹框时触发
    * @default -
    */
    onClose: () => void
    /**
    * 点击遮罩触发
    * @default -
    */
    onOverlayClick: (e: MouseEvent) => boolean | void
    /**
    * 点击关闭图标时触发
    * @default -
    */
    onCloseIconClick: (e: MouseEvent) => boolean | void
}
export declare const Popup: FunctionComponent<Partial<PopupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>>;
export {};
