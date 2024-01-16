import React from 'react';
import { PushNotification as Not } from './Storage';
import './Notification.css';
declare type Position = 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right';
interface Props {
    position?: Position;
}
interface State {
    value: Array<Not>;
}
/**
 * Notification injector, which renders
 * the push notifications rendered
 * by the addNotifcation({}) function.
 *
 * @param {string} position - Must pass as prop. Sets the position of the push notification.
 * position can me 'top-left', 'top-middle', 'top-right', 'bottom-left', 'bottom-middle', 'bottom-right'.
 * Example <Notifications position='top-middle' />
 *
 */
declare class Notifications extends React.Component<Props> {
    state: State;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Notifications;
