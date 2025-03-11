const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName,LastName,age,Gender,Interst){
    var obj={};
        obj.name={
            "firstName" : firstName,
            "LastName" : LastName}
        obj.age = age;
        obj.Gender = Gender;
        obj.Interst = Interst;
        obj.boi = function (){
            return `the interest of ${this.name.firstName} of age ${this.age},are ${this.Interst}` ;
        };
        return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    }
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person2 = new Person("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.model = "Civic";

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
function Hamburger(bun,vegetables,cheeses,sauces,meatType,meatCount,extras){
    this.bun = bun,
    this.vegetables = vegetables,
    this.cheeses = cheeses,
    this.sauces = sauces,
    this.meatType=meatType,
    this.meatCount = meatCount,
    this.extras = extras;
    this.describe = function() {
        return `This is a ${this.bun} bun ${this.meatType} ${this.meatCount}-Patty Burger with ${this.cheeses.length > 0 ? "Cheese (" + this.cheeses.join(", ") + ")" : "no Cheese"},
        garnished with ${this.vegetables.join(", ")} and topped with ${this.sauces.join(", ")}. 
        Extras include ${this.extras.length > 0 ? this.extras.join(", ") : "no extras"}.`;
    };
}
// Creating different burgers
let classicBurger = new Hamburger(
    "sesame seed",
    ["lettuce", "tomato", "onion"],
    ["cheddar"],
    ["ketchup", "mustard"],
    "beef",
    "single",
    ["pickles"]
);

let spicyChickenBurger = new Hamburger(
    "brioche",
    ["lettuce", "jalapeños"],
    ["pepper jack"],
    ["spicy mayo", "hot sauce"],
    "chicken",
    "Double",
    ["onion rings"]
);

let veggieDelight = new Hamburger(
    "whole wheat",
    ["lettuce", "tomato", "cucumber", "avocado"],
    [],
    ["garlic aioli"],
    "vegetarian",
    "Thipple",
    ["sprouts"]
);


console.log(classicBurger.describe());
console.log(spicyChickenBurger.describe());
console.log(veggieDelight.describe());

// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS