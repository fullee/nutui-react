import { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface SwiperItemProps extends BasicComponent {
    itemId?: string;
    skipHiddenItemLayout?: boolean;
}
export declare const SwiperItem: FunctionComponent<Partial<SwiperItemProps>>;
