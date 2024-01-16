"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PushNotification = (props) => {
    const { title, subtitle, message, theme, id, closeNotification, styling, closeButton, onClick } = props;
    let topStyling = {};
    let bottomStyling = {};
    if (styling) {
        topStyling.backgroundColor = styling.backgroundTop;
        topStyling.color = styling.colorTop;
        bottomStyling.backgroundColor = styling.backgroundBottom;
        bottomStyling.color = styling.colorBottom;
    }
    return react_1.default.createElement("div", { className: `rpn-notification-card ${theme}`, onClick: onClick },
        react_1.default.createElement("div", { className: `rpn-notification-card-top ${theme}`, style: Object.keys(topStyling).length ? topStyling : undefined },
            react_1.default.createElement("span", null, title),
            react_1.default.createElement("span", { className: `rpn-notification-card-close ${theme}`, onClick: () => closeNotification(id) }, closeButton || 'close')),
        react_1.default.createElement("div", { className: `rpn-notification-card-bottom ${theme}`, style: Object.keys(bottomStyling).length ? bottomStyling : undefined },
            react_1.default.createElement("span", { className: 'subtitle' }, subtitle),
            react_1.default.createElement("span", { className: 'message' }, message)));
};
exports.default = PushNotification;
