/* Questions

1. {1, 2, 3, 4}

2. "ref"

3.  {[1, 2, 3] => true}
    {[1, 2, 3] => false}
*/

// hasDuplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length;

// vowelCount

const vowels = "aeiou";

const vowelCount = str => {
    let vowelMap = new Map();
    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            if (vowelMap.has(char.toLowerCase())) {
                vowelMap.set(char.toLowerCase(), vowelMap.get(char.toLowerCase()) + 1);
            } else {
                vowelMap.set(char.toLowerCase(), 1);
            }
        }
    }
    return vowelMap;
}