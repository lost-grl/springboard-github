//Same keys and values
const createInstructor = (firstName, lastName) => ({["firstName"]: firstName, ["lastName"]: lastName});

//Computed property names
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};

//createAnimal function
const createAnimal = (species, verb, noise) => ({
    "species": species,
    [verb](){
        return noise;
    }
})