import React, { Component } from 'react';
export interface AnimatingNumbersProps {
}
export declare class AnimatingNumbers extends Component<AnimatingNumbersProps, unknown> {
    static defaultProps: AnimatingNumbersProps;
    static displayName: string;
    static CountUp: React.FunctionComponent<Partial<import("./countup.taro").CountUpProps>>;
    constructor(props: AnimatingNumbersProps);
    render(): JSX.Element;
}
