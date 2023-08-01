/// <reference types="react" />
declare const CheckboxGroupContext: import("react").Context<{
    labelPosition: 'left' | 'right';
    disabled: boolean | undefined;
    value: string[];
    max: number | undefined;
    check: (value: string) => void;
    uncheck: (value: string) => void;
} | null>;
export default CheckboxGroupContext;
