type Direction = '' | 'vertical' | 'horizontal';
export declare function useTouch(): {
    move: (event: React.TouchEvent<HTMLElement>) => void;
    start: (event: React.TouchEvent<HTMLElement>) => void;
    reset: () => void;
    startX: number;
    startY: number;
    moveX: number;
    moveY: number;
    deltaX: number;
    deltaY: number;
    offsetX: number;
    offsetY: number;
    direction: Direction;
    isVertical: () => boolean;
    isHorizontal: () => boolean;
};
export {};
