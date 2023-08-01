import { FunctionComponent } from 'react';
import { BasicComponent } from '../../utils/typings';
import { BaseLang } from '../../locales/base';
import type { NutCSSVariables } from './types';
export interface ConfigProviderProps extends BasicComponent {
    /**
    * 设置多语言包
    * @default zhCN
    */
    locale: BaseLang
    /**
    * 设置主题
    * @default -
    */
    theme?: Record<string | NutCSSVariables, string>
}
export declare const defaultConfigRef: {
    current: ConfigProviderProps;
};
export declare const setDefaultConfig: (config: ConfigProviderProps) => void;
export declare const getDefaultConfig: () => ConfigProviderProps;
export declare const useConfig: () => ConfigProviderProps;
export declare const ConfigProvider: FunctionComponent<Partial<ConfigProviderProps & BasicComponent>>;
