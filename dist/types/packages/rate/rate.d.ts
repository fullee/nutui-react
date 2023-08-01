import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface RateProps extends BasicComponent {
    /**
    * star 总数
    * @default 5
    */
    count: number
    /**
    * 受控的 star 数值
    * @default 0
    */
    value: number
    /**
    * 非受控的 star 默认值
    * @default 0
    */
    defaultValue: number
    /**
    * 最少选中star数量
    * @default 0
    */
    min: number
    /**
    * 使用图标(选中)
    * @default star-n
    */
    checkedIcon: React.ReactNode
    /**
    * 使用图标(未选中)
    * @default star-n
    */
    uncheckedIcon: React.ReactNode
    /**
    * 是否禁用
    * @default false
    */
    disabled: boolean
    /**
    * 是否只读
    * @default false
    */
    readOnly: boolean
    /**
    * 是否半星
    * @default false
    */
    allowHalf: boolean
    /**
    * 当前 star 数修改时触发
    * @default -
    */
    onChange: (value: number) => void
}
export declare const Rate: FunctionComponent<Partial<RateProps>>;
