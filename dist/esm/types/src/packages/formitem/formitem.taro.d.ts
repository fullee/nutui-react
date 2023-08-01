import React from 'react';
import { BaseFormField } from './types';
import { Context } from '../form/context';
import { BasicComponent } from '@/utils/typings';
type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
export interface FormItemProps extends BasicComponent, BaseFormField {
    required: boolean;
    initialValue: any;
    trigger: string;
    valuePropName: string;
    getValueFromEvent: (...args: any) => any;
    onClick: (event: React.MouseEvent, componentRef: React.MutableRefObject<any>) => void;
    errorMessageAlign: TextAlign;
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
