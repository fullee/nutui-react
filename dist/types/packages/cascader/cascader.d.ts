import React from 'react';
import { PopupProps } from '../../packages/popup/popup';
import { CascaderOption, CascaderValue, CascaderOptionKey } from './types';
export interface CascaderProps extends PopupProps {
    /**
    * 是否弹窗状态展示
    * @default true
    */
    popup: boolean
    /**
    * 级联显示隐藏状态
    * @default false
    */
    visible: boolean
    /**
    * 选中激活颜色
    * @default -
    */
    activeColor: string
    /**
    * 标记选中的Icon
    * @default ReactNode
    */
    activeIcon: string
    /**
    * 级联数据
    * @default -
    */
    options: CascaderOption[]
    /**
    * 选中值，受控
    * @default -
    */
    value?: CascaderValue
    /**
    * 默认选中值
    * @default -
    */
    defaultValue?: CascaderValue
    /**
    * 自定义options中的关键字，valueKey、textKey、childrenKey
    * @default {valueKey: 'value', textKey: 'text', childrenKey: 'children'}
    */
    optionKey: CascaderOptionKey
    /**
    * 当options为可转换为树形结构的扁平结构时，配置转换规则
    * @default -
    */
    format: Record<string, string | number | null>
    /**
    * 是否显示关闭按钮，继承 Popup 组件
    * @default true
    */
    closeable: boolean
    /**
    * 取消按钮位置，继承 Popup 组件
    * @default top-right
    */
    closeIconPosition: string
    /**
    * 自定义关闭按钮，继承 Popup 组件
    * @default close
    */
    closeIcon: string
    /**
    * 是否开启动态加载
    * @default false
    */
    lazy: boolean
    /**
    * 动态加载回调，开启动态加载时生效
    * @default -
    */
    onLoad: (node: any, resolve: any) => void
    /**
    * 选中值改变时触发
    * @default -
    */
    onChange: (value: CascaderValue, params?: any) => void
    /**
    * 选中项改变时触发
    * @default -
    */
    onPathChange: (value: CascaderValue, params: any) => void
}
export declare const Cascader: React.ForwardRefExoticComponent<Partial<CascaderProps> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
