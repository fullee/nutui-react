import React, { FunctionComponent } from 'react';
import { PopupProps } from '../../packages/popup/popup';
export interface NumberKeyboardProps extends PopupProps {
    /**
    * 是否显示键盘
    * @default false
    */
    visible: boolean
    /**
    * 自定义完成按钮文字，如"支付"，"下一步"，"提交"等
    * @default 完成
    */
    confirmText?: string
    /**
    * 键盘模式, default：默认样式 rightColumn：带右侧栏
    * @default default
    */
    type: 'default' | 'rightColumn'
    /**
    * 自定义键盘额外的键, 数组形式最多支持添加 2 个, 超出默认取前 2 项
    * @default -
    */
    custom: Array<string>
    /**
    * 随机数
    * @default false
    */
    random: boolean
    /**
    * 点击按键时触发
    * @default -
    */
    onChange?: (value: string) => void
    /**
    * 点击删除键时触发
    * @default -
    */
    onDelete?: () => void
    /**
    * 点击关闭按钮或非键盘区域时触发
    * @default -
    */
    onClose: () => void
    /**
    * 点击确定按钮时触发
    * @default -
    */
    onConfirm?: () => void
}
export declare const NumberKeyboard: FunctionComponent<Partial<NumberKeyboardProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onClick' | 'title'>>;
