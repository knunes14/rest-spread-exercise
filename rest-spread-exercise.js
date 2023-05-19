// 1. Given this function, refactor it to use the rest operator & an arrow function: 
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

// ES2015 version:
const filterOutOdds = (...oddsOnly) => oddsOnly.filter(num => num % 2 ===0);

// 2. findMin

const findMin = (...minArg) => Math.min(...minArg);

// 3. mergeObjects

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// 4. doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v*2)];

// 5. Slice and Dice! - Use rest, spread, and refactor functions to be arrow functions

// 5a. 
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idx), ...items.slice(idx + 1)];
}

// 5b. 
const extend = (array1, array2) => {
    return [...array1, ...array2];
}

// 5c.
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

// 5d.
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

// 5e. 
const combine = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj;
}

// 5f. 
const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}



