var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function signal(initialValue) {
    var currentValue1 = initialValue;
    var subscibers = new Map();
    var updateSubs = function () {
        var e_1, _a;
        try {
            for (var subscibers_1 = __values(subscibers), subscibers_1_1 = subscibers_1.next(); !subscibers_1_1.done; subscibers_1_1 = subscibers_1.next()) {
                var _b = __read(subscibers_1_1.value, 2), _key = _b[0], value = _b[1];
                value(currentValue1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (subscibers_1_1 && !subscibers_1_1.done && (_a = subscibers_1.return)) _a.call(subscibers_1);
            }
            finally { if (e_1) throw e_1.error; }
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
export default { signal: signal };
//# sourceMappingURL=index.js.map