"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function signal(initialValue) {
    var currentValue1 = initialValue;
    var subscibers = new Map();
    var updateSubs = function () {
        for (var _i = 0, subscibers_1 = subscibers; _i < subscibers_1.length; _i++) {
            var _a = subscibers_1[_i], _key = _a[0], value = _a[1];
            value(currentValue1);
        }
    };
    return {
        set: function (newValue) {
            currentValue1 = newValue;
            updateSubs();
        },
        update: function (callBack) {
            currentValue1 = callBack(currentValue1);
            updateSubs();
        },
        subscribe: function (callBack) {
            var uniqueId = 'id' + (new Date()).getTime() + Math.random() * 200;
            callBack(currentValue1);
            subscibers.set(uniqueId, callBack);
            return function () { return subscibers.delete(uniqueId); };
        }
    };
}
exports.default = { signal: signal };
