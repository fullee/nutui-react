import * as React from 'react';
import { BasicComponent } from '../../utils/typings';
export interface NotifyProps extends BasicComponent {
    id: string;
    /**
    * 展示时长(ms)，值为 0 时，notify 不会消失
    * @default 3000
    */
    duration: number
    /**
    * 提示的信息类型（primary，success ，danger，warning）
    * @default danger
    */
    type: string
    /**
    * 自定义位置 (top, bottom)
    * @default top
    */
    position: string
    /**
    * 点击事件回调
    * @default -
    */
    onClick: () => void
    /**
    * 关闭事件回调
    * @default -
    */
    onClose: () => void
}
declare const _default: {
    text(message: string | React.ReactNode, option?: {}): void;
    success(message: string | React.ReactNode, option?: {}): void;
    primary(message: string | React.ReactNode, option?: {}): void;
    danger(message: string | React.ReactNode, option?: {}): void;
    warn(message: string | React.ReactNode, option?: {}): void;
    hide(): void;
};
export default _default;
