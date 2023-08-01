import * as React from 'react';
import { BasicComponent } from '@/utils/typings';
export interface NotificationProps extends BasicComponent {
    id: string;
    message: string | React.ReactNode;
    duration: number;
    type: string;
    position: string;
    onClose: () => void;
    onClick: () => void;
}
interface State {
    show: boolean;
}
export default class Notification extends React.PureComponent<NotificationProps, State> {
    private closeTimer;
    static newInstance: (properties: NotificationProps, callback: any) => void;
    constructor(props: NotificationProps);
    close(): void;
    startCloseTimer(): void;
    clearCloseTimer(): void;
    clickCover(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
