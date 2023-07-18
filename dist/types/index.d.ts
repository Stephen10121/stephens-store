export default function signal<T>(initialValue: T): {
    set: (newValue: T) => void;
    update: (callBack: (currentValue: T) => T) => void;
    subscribe: (callBack: (currentValue: T) => any) => () => boolean;
};
//# sourceMappingURL=index.d.ts.map