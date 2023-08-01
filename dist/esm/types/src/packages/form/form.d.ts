import React, { FunctionComponent, ReactNode } from 'react';
import { useForm } from './useform';
import { BasicComponent } from '@/utils/typings';
import { FormItem } from '../formitem/formitem';
export interface FormProps extends BasicComponent {
    footer: ReactNode;
    initialValues: any;
    name: string;
    form: any;
    labelPosition: 'top' | 'left' | 'right';
    starPosition: 'left' | 'right';
    onFinish: (values: any) => void;
    onFinishFailed: (values: any, errorFields: any) => void;
}
export declare const Form: FunctionComponent<Partial<FormProps> & React.HTMLAttributes<HTMLFormElement>> & {
    Item: typeof FormItem;
} & {
    useForm: typeof useForm;
};
