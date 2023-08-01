import { PositionType, Data } from './type';
declare const initPositinoCache: (reaItemSize: number, length?: number) => PositionType[];
declare const getListTotalSize: (positions: Array<PositionType>, horizontal: true | false) => number;
declare const binarySearch: (positionsList: Array<PositionType>, value: number | undefined, horizontal: true | false) => number;
declare const getEndIndex: ({ list, startIndex, visibleCount, itemEqual, positions, offSetSize, overscan, sizeKey, }: {
    list: Array<Data>;
    startIndex: number;
    visibleCount: number;
    itemEqual?: boolean | undefined;
    positions: PositionType[];
    offSetSize: number;
    overscan: number;
    sizeKey?: "height" | "width" | undefined;
}) => number;
declare const updateItemSize: (positions: PositionType[], items: HTMLCollection, sizeKey: 'width' | 'height') => void;
export { initPositinoCache, getListTotalSize, binarySearch, getEndIndex, updateItemSize, };
