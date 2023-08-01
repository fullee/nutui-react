import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
import { ITouchEvent } from '@tarojs/components';
interface ContentProps {
    visible: boolean;
    title: ReactNode;
    footer: ReactNode;
    footerDirection: string;
    onClick: (event: ITouchEvent) => void;
}
export declare const Content: FunctionComponent<Partial<ContentProps> & Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>>;
export {};
