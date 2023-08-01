import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
interface ContentProps {
    visible: boolean;
    title: ReactNode;
    footer: ReactNode;
    footerDirection: string;
}
export declare const Content: FunctionComponent<Partial<ContentProps> & HTMLAttributes<HTMLDivElement>>;
export {};
