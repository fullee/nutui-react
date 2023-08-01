import type { CSSProperties, ReactNode } from 'react';
export interface BasicComponent {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
export declare const ComponentDefaults: {
    className: string;
    style: {};
};
