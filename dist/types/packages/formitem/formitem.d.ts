import React from 'react';
import { BaseFormField } from './types';
import { Context } from '../form/context';
import { BasicComponent } from '../../utils/typings';
type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
export interface FormItemProps extends BasicComponent, BaseFormField {
    /**
    * 必填表单项 label 的红色星标,仅用于控制样式
    * @default false
    */
    required: boolean
    /**
    * 设置子元素默认值
    * @default -
    */
    initialValue: any
    /**
    * 设置收集字段值变更的时机
    * @default -
    */
    trigger: string
    /**
    * 子节点的值的属性，如 Checkbox 的是 'checked'
    * @default -
    */
    valuePropName: string
    /**
    * 设置如何将 event 的值转换成字段值
    * @default -
    */
    getValueFromEvent: (...args: any) => any
    /**
    * 点击事件并收集子组件 Ref
    * @default -
    */
    onClick: (event: React.MouseEvent, componentRef: React.MutableRefObject<any>) => void
    /**
    * 错误提示文案对齐方式
    * @default left
    */
    errorMessageAlign: TextAlign
}
export declare class FormItem extends React.Component<Partial<FormItemProps>, {
    resetCount: number;
}> {
    static defaultProps: FormItemProps;
    static contextType: any;
    context: React.ContextType<typeof Context>;
    private cancelRegister;
    private componentRef;
    constructor(props: FormItemProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getControlled: (children: React.ReactElement) => any;
    refresh: () => void;
    onStoreChange: (type?: string) => void;
    renderLayout: (childNode: React.ReactNode) => JSX.Element;
    render(): JSX.Element;
}
export {};
