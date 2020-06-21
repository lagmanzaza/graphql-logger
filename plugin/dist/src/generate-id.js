"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (pattern) {
    return pattern.replace(/[x]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c == "x" || "X" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
});
