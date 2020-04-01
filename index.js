// Write your solution in this file!


const driver = {};


function updateDriverWithKeyAndValue(obj, key, value) {
    // This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
    return Object.assign({}, obj, {[key]: value});
}


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    // Updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
    obj[key] = value;
    return obj;
}


function deleteFromDriverByKey(obj, key) {
    // Deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
    // Does not modify the original driver (it is non-destructive)
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


function destructivelyDeleteFromDriverByKey(obj, key) {
    // Returns driver without the delete key/value pair
    // Modifies the original driver
    delete obj[key];
    return obj;
}
