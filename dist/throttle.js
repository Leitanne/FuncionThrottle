"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
const throttle = (delay, functionPromised) => {
    let check = true;
    return function (...args) {
        if (check) {
            check = false;
            setTimeout((...args) => {
                functionPromised(...args);
                check = false;
            }, delay);
            return functionPromised(...args);
        }
    };
};
exports.throttle = throttle;
