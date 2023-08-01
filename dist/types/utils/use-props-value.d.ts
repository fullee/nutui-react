interface UsePropsValue<T> {
    value?: T;
    defaultValue?: T;
    finalValue?: T;
    onChange?: (value: T) => void;
}
export declare function usePropsValue<T>({ value, defaultValue, finalValue, onChange, }: UsePropsValue<T>): [value: T, onChange: (value: T) => void];
export {};
