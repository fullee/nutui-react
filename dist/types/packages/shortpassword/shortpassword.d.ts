import { FunctionComponent, ReactNode } from 'react';
import { PopupProps } from '../popup/popup';
export interface ShortPasswordProps extends PopupProps {
    /**
    * 密码字符串
    * @default -
    */
    value: string
    /**
    * 是否展示短密码框
    * @default false
    */
    visible: boolean
    /**
    * 是否展示明文
    * @default false
    */
    plain: boolean
    /**
    * 标题
    * @default 请输入密码
    */
    title: ReactNode
    /**
    * 密码框描述
    * @default 您使用了虚拟资产，请进行验证
    */
    description: ReactNode
    /**
    * 提示语
    * @default 忘记密码
    */
    tips: ReactNode
    /**
    * 是否隐藏底部按钮
    * @default true
    */
    hideFooter: boolean
    /**
    * 密码长度，取值为4~6
    * @default 6
    */
    length: number
    /**
    * 错误信息提示
    * @default -
    */
    error: ReactNode
    /**
    * 自动聚焦
    * @default false
    */
    autoFocus: boolean
    /**
    * 输入框聚焦
    * @default -
    */
    onFocus: () => void
    /**
    * 输入密码时触发事件
    * @default -
    */
    onChange: (value: string) => void
    /**
    * 点击确认时触发事件
    * @default -
    */
    onConfirm: (value: string) => void
    /**
    * 点击取消时触发事件
    * @default -
    */
    onCancel: () => void
    /**
    * 点击关闭图标和遮罩时触发事件
    * @default -
    */
    onClose: () => void
    /**
    * 点击忘记密码时触发事件
    * @default -
    */
    onTips: () => void
    /**
    * 输入完成的回调
    * @default -
    */
    onComplete: (value: string) => void
}
export declare const ShortPassword: FunctionComponent<Partial<ShortPasswordProps>>;
