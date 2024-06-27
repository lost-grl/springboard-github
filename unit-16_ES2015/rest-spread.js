// refactor
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

// findMin 
const findMin = (...args) => Math.min(...args)

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)]

// slice and dice
const removeRandom = items => {
    let newArr = [];
    const i = Math.floor(Math.random() * items.length);
    for (item of items) {
        if (items.indexOf(item) !== i) {
            newArr.push(item);
        }
    }
    return newArr;
}

const allItems = (arr1, arr2) => [...arr1, ...arr2];

const addNew = (obj, newKey, newVal) => ({...obj, [newKey]: newVal});

const delKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combineObjs = (obj1, obj2) => ({...obj1, ...obj2});

const modKey = (obj, key, val) => ({obj, [key]: val});