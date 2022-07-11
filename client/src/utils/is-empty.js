//is-empty.js

const isEmpty = (value) => { 
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}
//This mean the return value of this function will be null when it comes to the every value of each values are all null.

export default isEmpty;