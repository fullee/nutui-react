import React, { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
export interface SwitchProps extends BasicComponent {
    /**
    * 开关状态，受控
    * @default false
    */
    checked: boolean
    /**
    * 开关状态，非受控
    * @default false
    */
    defaultChecked: boolean
    /**
    * 禁用状态
    * @default false
    */
    disabled: boolean
    /**
    * 打开时文字描述
    * @default -
    */
    activeText: string
    /**
    * 关闭时文字描述
    * @default -
    */
    inactiveText: string
    /**
    * 切换开关时触发
    * @default -
    */
    onChange: (val: boolean, event: React.MouseEvent) => void
}
export declare const Switch: FunctionComponent<Partial<SwitchProps>>;
