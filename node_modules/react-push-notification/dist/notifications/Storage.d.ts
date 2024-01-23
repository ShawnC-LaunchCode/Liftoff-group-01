/// <reference types="react" />
export declare type Color = 'light' | 'darkblue' | 'red' | undefined;
declare type voidFunc = () => void;
export declare type eventFunc = (e: any) => void;
export declare type onClickType = voidFunc | eventFunc | undefined;
export declare type Options = {
    title: string;
    subtitle?: string;
    message?: string;
    onClick?: onClickType;
    theme?: Color;
    duration?: number;
    backgroundTop?: string;
    backgroundBottom?: string;
    colorTop?: string;
    colorBottom?: string;
    closeButton?: JSX.Element | string;
    native?: boolean;
    icon?: string;
    vibrate?: number | number[];
    silent?: boolean;
};
export declare type Styling = {
    backgroundTop?: string;
    backgroundBottom?: string;
    colorTop?: string;
    colorBottom?: string;
};
export interface PushNotificationObject {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    styling?: Styling;
    closeButton?: JSX.Element | string;
    onClick?: onClickType;
}
export declare class PushNotification {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    id: number;
    styling?: Styling;
    closeButton?: JSX.Element | string;
    onClick?: onClickType;
    constructor(op: PushNotificationObject);
}
declare class Storage {
    Storage: Array<PushNotification>;
    Listener: (storage: any) => void;
    popAndPush: (NotificationId: number) => void;
    setTimer: (NotificationId: number, duration: number) => void;
    addListener: (listener: (v: Array<PushNotification>) => void) => void;
    addNativeNotification: (options: Options) => Promise<void>;
    addWebNotification: (options: Options) => void;
    addNotification: (options: Options) => Promise<void>;
}
declare const _default: Storage;
export default _default;
