/// <reference types="react" />
import { Color, Styling, eventFunc } from './Storage';
interface Props {
    title: string;
    id: number;
    message?: string;
    subtitle?: string;
    theme?: Color;
    styling?: Styling;
    closeButton?: JSX.Element | string;
    onClick?: eventFunc;
    closeNotification: (id: number) => void;
}
declare const PushNotification: (props: Props) => JSX.Element;
export default PushNotification;
