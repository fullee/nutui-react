import { ConfirmProps, DialogReturnProps } from './config';
export declare const normalizeConfig: (config: ConfirmProps) => ConfirmProps;
declare const confirm: (config: ConfirmProps, renderFunc?: ((props: ConfirmProps) => void) | undefined) => DialogReturnProps;
export default confirm;
