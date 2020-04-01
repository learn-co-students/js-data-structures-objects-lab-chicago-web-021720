// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const updatedDriver = { ...driver};
    updatedDriver[key] = value;

    return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const updatedDriver = { ...driver};
    delete updatedDriver[key];

    return updatedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;
}