import React, { FunctionComponent, ReactNode } from 'react';
import { useForm } from './useform';
import { BasicComponent } from '../../utils/typings';
import { FormItem } from '../formitem/formitem';
export interface FormProps extends BasicComponent {
    /**
    * 表单底部区域，一般放置确认和重置按钮
    * @default null
    */
    footer: ReactNode
    /**
    * 表单初始值
    * @default -
    */
    initialValues: any
    /**
    * 表单名称
    * @default -
    */
    name: string
    /**
    * 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
    * @default -
    */
    form: any
    /**
    * 表单项 label 的位置
    * @default right
    */
    labelPosition: 'top' | 'left' | 'right'
    /**
    * 必填表单项 label 的红色星标位置
    * @default left
    */
    starPosition: 'left' | 'right'
    /**
    * 校验成功后触发
    * @default -
    */
    onFinish: (values: any) => void
    /**
    * 任一表单项被校验失败后触发
    * @default -
    */
    onFinishFailed: (values: any, errorFields: any) => void
}
export declare const Form: FunctionComponent<Partial<FormProps> & React.HTMLAttributes<HTMLFormElement>> & {
    Item: typeof FormItem;
} & {
    useForm: typeof useForm;
};
