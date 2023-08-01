import * as React from 'react';
import { BasicComponent } from '../../utils/typings';
export interface NotificationProps extends BasicComponent {
    id?: string;
    icon: 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode;
    content: string | React.ReactNode;
    duration: number;
    position?: 'top' | 'center' | 'bottom';
    title: string;
    size: string | number;
    closeOnOverlayClick: boolean;
    lockScroll: boolean;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    onClose: () => void;
}
export interface NotificationState {
    show: boolean;
}
export default class Notification extends React.PureComponent<NotificationProps, NotificationState> {
    static newInstance: (properties: NotificationProps, callback: any) => void;
    private closeTimer;
    constructor(props: NotificationProps);
    close(): void;
    startCloseTimer(): void;
    clearCloseTimer(): void;
    clickCover(): void;
    renderIcon(): number | boolean | JSX.Element | React.ReactFragment | null | undefined;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
