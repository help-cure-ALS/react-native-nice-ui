"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSection = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const List_1 = require("./List");
const ListSection = (0, react_1.memo)((props) => {
    const { title, rightCmp, rounded = false, borders = true, style, containerStyle, titleStyle, children, ...attributes } = props;
    return ((0, jsx_runtime_1.jsx)(List_1.List, { ...attributes, title: title, rightCmp: rightCmp, rounded: rounded, borders: borders, style: style, containerStyle: containerStyle, titleStyle: titleStyle, children: children }));
});
exports.ListSection = ListSection;
