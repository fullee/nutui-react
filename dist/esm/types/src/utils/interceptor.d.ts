export type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;
export declare const funcInterceptor: (interceptor: Interceptor | undefined, { args, done, canceled, }: {
    args?: unknown[] | undefined;
    done: (val?: any) => void;
    canceled?: (() => void) | undefined;
}) => void;