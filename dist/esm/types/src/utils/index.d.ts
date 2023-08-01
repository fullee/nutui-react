export declare const isObject: (val: unknown) => val is Record<any, any>;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;
export declare const upperCaseFirst: (str: string) => string;
