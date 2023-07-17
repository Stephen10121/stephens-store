declare function signal<T>(initialValue: T): {
    set: (newValue: T) => void;
    update: (callBack: (currentValue: T) => T) => void;
    subscribe: (callBack: (currentValue: T) => T) => () => boolean;
};
declare const _default: {
    signal: typeof signal;
};
export default _default;
//# sourceMappingURL=index.d.ts.map