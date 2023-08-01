import { FunctionComponent } from 'react';
import { BasicComponent } from '@/utils/typings';
export interface ImagePreviewProps extends BasicComponent {
    images: Array<{
        src: string;
    }>;
    videos: Array<{
        source: {
            src: string;
            type: string;
        };
        options: {
            muted: boolean;
            controls: boolean;
        };
    }>;
    visible: boolean;
    autoPlay: boolean;
    value?: number;
    defaultValue: number;
    closeOnContentClick: boolean;
    indicator: boolean;
    indicatorColor: string;
    showMenuByLongpress: boolean;
    onChange: (value: number) => void;
    onClose: () => void;
}
export declare const ImagePreview: FunctionComponent<Partial<ImagePreviewProps>>;
