/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 1 - Search
//  2. Implement a function declaration called `search` that:

//    - Takes a paramater representing an Array of `animals`.
//    - Takes a paramater representing a String, the name of an animal on which to perform a search.
//    - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
//    - Returns `null` if no animal with that name exists
//  3. Use the search bar at the top of the page to make sure your function works.

function search(array, string) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name == string) {
            return array[i];
        } 
    }
    return null;
}
//console.log(search(animals, ));


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 2 - Replace
//  1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//    - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
//    - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//    - Otherwise do nothing.
//  2. Preview the `index.html` page to test it on the website.
function replace(array, string, object) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name == string) { 
            array.splice(i, 1, object);
        }
}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
// - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
// - If an animal with that name exists within the `animals` Array, remove it.
// 2. Test that it works on the website.

function remove(array, string) {
for (var i = 0; i < array.length; i++) {
    if (array[i].name == string) { 
        array.splice(i, 1);
    }
}
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//     - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//     - Checks that the animal Object has a `name` property with a length > 0.
//     - Checks that the animal Object has a `species` property with a length > 0.
//     - Has a **unique** name, meaning no other animals have that name.
//     - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//     - Make sure it works.
function add(array, object) { //taking array and object as parameters 
    var objectAbsent = true; //sets value of variable objectAbsent to true
    if (object.name.length > 0 && object.species.length > 0) { //testing object.name and object.species to see if there is value present.
    for (var i = 0; i < array.length; i++) { //for loop followed by if conditional. 
        if (array[i].name === object.name) { // looping through objects in array to see if name key matches name key of object.
            objectAbsent = false; 
            break;
        }
    }
}
if (objectAbsent) { //if conditional testing whether objectAbsent has value of true or false.
    array.push(object)
}
}
console.log(animals);
//  This is called **data validation** and it's extremely important in web development!

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
