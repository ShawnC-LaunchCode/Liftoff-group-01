"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = void 0;
const defaultDuration = 3000;
class PushNotification {
    constructor(op) {
        this.title = op.title;
        this.subtitle = op.subtitle;
        this.message = op.message;
        this.theme = op.theme;
        this.id = Math.random();
        this.styling = op.styling;
        this.closeButton = op.closeButton;
        this.onClick = op.onClick;
    }
}
exports.PushNotification = PushNotification;
class Storage {
    constructor() {
        this.Storage = [];
        this.Listener = () => this.Storage;
        this.popAndPush = (NotificationId) => {
            let i = 0;
            while (i < this.Storage.length) {
                if (this.Storage[i].id === NotificationId) {
                    this.Storage.splice(i, 1);
                }
                else {
                    ++i;
                }
            }
            this.Listener(this.Storage);
        };
        this.setTimer = (NotificationId, duration) => {
            setTimeout(() => this.popAndPush(NotificationId), duration);
        };
        this.addListener = (listener) => {
            this.Listener = listener;
        };
        this.addNativeNotification = (options) => __awaiter(this, void 0, void 0, function* () {
            const { title, subtitle, message, duration, icon, vibrate, silent, onClick } = options;
            if (Notification.permission === 'default' || Notification.permission === 'denied') {
                yield Notification.requestPermission();
            }
            if (Notification.permission === 'granted') {
                const not = new Notification(title, {
                    body: message,
                    data: subtitle,
                    icon,
                    vibrate,
                    silent
                });
                not.onclick = onClick || null;
                setTimeout(not.close.bind(not), duration || defaultDuration);
            }
        });
        this.addWebNotification = (options) => {
            const { title, subtitle, message, theme, duration, backgroundBottom, backgroundTop, colorBottom, colorTop, closeButton, onClick } = options;
            const styling = {
                backgroundTop,
                backgroundBottom,
                colorTop,
                colorBottom
            };
            const newNotification = new PushNotification({ title, subtitle, message, theme, styling, closeButton, onClick });
            this.Storage.push(newNotification);
            this.setTimer(newNotification.id, duration || defaultDuration);
            this.Listener(this.Storage);
        };
        this.addNotification = (options) => __awaiter(this, void 0, void 0, function* () {
            const { native } = options;
            if (native) {
                return this.addNativeNotification(options);
            }
            return this.addWebNotification(options);
        });
    }
}
exports.default = new Storage();
