const isObject = require('lodash/isObject');

/**
 * Deep Find Key
 * @description Get the object I found by key inside an object with children objects
 * @param {Object} object
 * @param {String} key
 * @returns {Object}
 */
function deepFindKey(object, key) {
    if (!isObject(object)) return object;
    if (object[key] !== undefined) return { [object[key]]: object };
    return Object.keys(object).reduce((accumulator, currentValue) => {
        if (isObject(object[currentValue])) {
            return { ...accumulator, ...deepFindKey(object[currentValue], key) };
        }
        return accumulator;
    }, {});
}

module.exports = deepFindKey;