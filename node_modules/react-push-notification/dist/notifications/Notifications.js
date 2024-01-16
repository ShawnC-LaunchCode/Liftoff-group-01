"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Storage_1 = __importDefault(require("./Storage"));
require("./Notification.css");
const PushNotification_1 = __importDefault(require("./PushNotification"));
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
class Notifications extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: [],
        };
    }
    componentDidMount() {
        Storage_1.default.addListener((v) => this.setState({ value: v }));
    }
    render() {
        const { position } = this.props;
        const classN = `rpn-notification-holder ${position || 'top-middle'} supertest`;
        return react_1.default.createElement("div", { className: classN }, this.state.value.map((note, i) => {
            return react_1.default.createElement(PushNotification_1.default, { key: i, closeNotification: Storage_1.default.popAndPush, onClick: note.onClick, id: note.id, theme: note.theme, title: note.title, subtitle: note.subtitle, closeButton: note.closeButton, message: note.message, styling: note.styling });
        }));
    }
}
;
exports.default = Notifications;
