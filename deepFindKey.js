export function isObject(object) {
    return typeof object === 'object' && object !== null;
}

/**
 * Deep Find Key
 * @description Get the object I found by key inside an object with children objects
 * @param {Object} object
 * @param {String} key
 * @returns {Object}
 */
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