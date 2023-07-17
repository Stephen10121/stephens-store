export default function signal<T>(initialValue: T) {
    let currentValue1: T = initialValue;
    const subscibers = new Map();

    const updateSubs = () => {
        for (const [_key, value] of subscibers) value(currentValue1);
    }

    return {
        set: (newValue: T) => {
            currentValue1 = newValue;
            updateSubs();
        },
        update: (callBack: (currentValue: T) => T) => {
            currentValue1 = callBack(currentValue1);
            updateSubs();
        },
        subscribe: (callBack: (currentValue: T) => any) => {
            const uniqueId = 'id' + (new Date()).getTime() + Math.random() * 200;
            callBack(currentValue1);
            subscibers.set(uniqueId, callBack);
            return () => subscibers.delete(uniqueId)
        }
    };
}