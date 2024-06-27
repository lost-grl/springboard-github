/* Destructuring Questions

obj 1. 
    console.log(numPlanets) prints 8; 
    console.log(yearNeptuneDiscovered) prints 1846;

obj 2. 
    console.log(discoveryYears) prints all of the key/value pairs listed after numPlanets:
    {
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
    }

obj 3.
    getUserData({firstName: "Alejandro", favoriteColor: "purple"})  returns "Your name is Alejandro and you like purple";

    getUserData({firstName: "Melissa"}) returns "Your name is Melissa and you like green"

    getUserData({}) returns "Your name is undefined and you like green";

arr 1. 
    In order, the logs print "Maya", "Marisa", and "Chi";

arr 2. 
    a. "Raindrops on roses"
    b. "Whiskers on kittens"
    c. prints the last 3 elements of the array

arr 3. 
    [10, 30, 20]
*/

//ES5 Assigning Variables to Object Properties/Object Destructuring
let obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

const { numbers: { a, b} } = obj;

//ES5 Array Swap
let arr = [1, 2];
[ arr[0] , arr[1] ] = [ arr[1] , arr[0] ];

//raceResults()

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})