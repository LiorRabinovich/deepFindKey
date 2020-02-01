export function isObject(object) {
    return typeof object === 'object' && object !== null;
}

export function deepFindKey(object, key) {
    if (!isObject(object)) return object;
    if (object[key]) return { [object[key]]: object };
    return Object.keys(object).reduce((accumulator, currentValue) => {
        if (isObject(object[currentValue])) {
            return { ...accumulator, ...deepFindKey(object[currentValue], key) };
        }
        return accumulator;
    }, {});
}