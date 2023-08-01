import React, { RefObject } from 'react';
import { PickerOption } from './types';
import { BasicComponent } from '../../utils/typings';
export type PickerActions = {
    open: () => void;
    close: () => void;
};
export interface PickerProps extends Omit<BasicComponent, 'children'> {
    /**
    * 是否可见
    * @default false
    */
    visible?: boolean | undefined
    /**
    * 设置标题
    * @default -
    */
    title?: string
    /**
    * 列表数据
    * @default []
    */
    options: (PickerOption | PickerOption[])[]
    /**
    * 选中值，受控
    * @default []
    */
    value?: (number | string)[]
    /**
    * 默认选中
    * @default []
    */
    defaultValue?: (number | string)[]
    /**
    * 是否开启3D效果
    * @default true
    */
    threeDimensional?: boolean
    /**
    * 快速滑动时惯性滚动的时长，单位 ms
    * @default 1000
    */
    duration: number | string
    /**
    * 点击确认按钮时候回调
    * @default -
    */
    onConfirm?: (selectedOptions: PickerOption[], selectedValue: (string | number)[]) => void
    /**
    * 关闭时触发
    * @default -
    */
    onClose?: (selectedOptions: PickerOption[], selectedValue: (string | number)[]) => void
    /**
    * 联动时，关闭时回调
    * @default -
    */
    afterClose?: (selectedOptions: PickerOption[], selectedValue: (string | number)[], pickerRef: RefObject<HTMLDivElement>) => void
    /**
    * 每一列值变更时调用
    * @default -
    */
    onChange?: (selectedOptions: PickerOption[], selectedValue: (string | number)[], columnIndex: number) => void
    children?: any;
}
declare const Picker: React.ForwardRefExoticComponent<Partial<PickerProps> & React.RefAttributes<unknown>>;
export default Picker;
