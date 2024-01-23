"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = void 0;
const Notifications_1 = __importDefault(require("./notifications/Notifications"));
exports.Notifications = Notifications_1.default;
const Storage_1 = __importDefault(require("./notifications/Storage"));
/**
* Add a new notification.
* Must pass an object with the params to the function.
*  @param {Options} options
 * @property {string} options.title - Title of the push notification.
 * @property {string} [options.subtitle] - Subtitle of the push notification.
 * @property {string} [options.message] - Message of the push notification.
 * @property {function} [options.onClick] - onclick callback. Optional parameter.
 * @property {('darkblue'|'red'|'light')} [options.theme=undefined] - Theme of the push notification.
 * @property {number} [options.duration=3000] - duration of the push notification in ms.
 * @property {string} [options.backgroundTop=undefined] - Background color of the top container of push notification.
 * @property {string} [options.backgroundBottom=undefined] - Background color of the bottom container of push notification.
 * @property {string} [options.colorTop=undefined] - Color of the top text of push notification.
 * @property {string} [options.colorBottom=undefined] - Color of the bottom text of push notification.
 * @property {(string|JSX.Element)} [options.closeButton="close"] - Color of the bottom text of push notification.
 * @property {boolean} [options.native=false] - Uses native browser notifications. Will prompt for user permission if not granted.
 * @property {string} [options.icon] - Native only. Link to image to show in notification.
 * @property {boolean} [options.silent] - Native only. Makes the notification silent.
 * @property {(number|numer[])} [options.vibrate] - Native only. Makes the notification vibrate.
 *
*/
const addNotification = Storage_1.default.addNotification;
exports.default = addNotification;
